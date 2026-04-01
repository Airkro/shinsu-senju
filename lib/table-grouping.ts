import { customSort } from './sort.ts';
import type { Tree, TreeNode } from './tree-mapper.ts';
import { getBy } from './utils.ts';
import type { Getter, UnknownObject } from './utils.ts';

// Types
// -----

export type FieldValue = unknown;

export interface GroupNode extends UnknownObject {
  readonly $group: GroupProcessConfig;
  readonly label: unknown;
  readonly value: unknown;
  readonly [key: string]: unknown;
}

export type Grouped = TreeNode | GroupNode;

export type Groupeds = Grouped[];

interface GroupProcessConfig {
  readonly groupBy: Getter;
  readonly labelBy: Getter;
  readonly extraBy?: Getter;
  readonly sortBy: Getter;
  readonly skipSingle: boolean;
  readonly childrenKey: string;
  readonly selectable?: boolean;
}

export type GroupConfig = Partial<GroupProcessConfig> & Record<string, unknown>;

export type Groups = GroupConfig | readonly GroupConfig[];

// Helpers
// -------

function groupByField(
  data: Tree,
  groupBy: Getter,
): { groups: Map<FieldValue, Tree>; ungrouped: Tree } {
  const groups = new Map<FieldValue, Tree>();
  const ungrouped: Tree = [];

  for (const item of data) {
    const key = getBy(item.$original, groupBy);

    if (key === undefined) {
      ungrouped.push(item);
    } else {
      const group = groups.get(key);

      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
  }

  return { groups, ungrouped };
}

function findValue(items: Tree, getter: Getter): unknown {
  const item = items.find(
    (node) => getBy(node.$original, getter) !== undefined,
  );

  return item ? getBy(item.$original, getter) : undefined;
}

function createGroupNode(
  config: GroupProcessConfig,
  value: FieldValue,
  items: Tree,
  children: Groupeds,
): GroupNode {
  const { labelBy, extraBy, childrenKey, selectable = false } = config;
  const extra = extraBy ? findValue(items, extraBy) : undefined;
  const node: GroupNode = {
    $group: config,
    label: findValue(items, labelBy),
    value,
    selectable,
    [childrenKey]: children,
    ...(extra !== undefined && { extra }),
    ...(typeof config.groupBy === 'string'
      ? { ident: config.groupBy }
      : undefined),
  };

  if (!globalThis.DEBUG) {
    Object.defineProperty(node, '$group', { enumerable: false });
  }

  return node;
}

function processGroups(
  groups: Map<FieldValue, Tree>,
  config: GroupProcessConfig,
  processChildren: (items: Tree) => Groupeds,
): Groupeds {
  const { skipSingle, sortBy } = config;
  const nodes: Groupeds = [];

  for (const [value, items] of groups) {
    if (items.length === 1 && skipSingle && items[0]) {
      nodes.push(items[0]);
    } else {
      const children = processChildren(items);
      nodes.push(createGroupNode(config, value, items, children));
    }
  }

  return nodes.toSorted((a, b) =>
    customSort(getBy(a, sortBy), getBy(b, sortBy)),
  );
}

function normalizeConfig(config: GroupConfig): GroupProcessConfig | undefined {
  const { groupBy, selectable } = config;

  if (!groupBy) {
    return undefined;
  }

  const labelBy: Getter = config.labelBy ?? groupBy;
  const sortBy: Getter = config.sortBy ?? labelBy;
  const { skipSingle = false, extraBy, childrenKey = 'children' } = config;

  return {
    groupBy,
    labelBy,
    sortBy,
    extraBy,
    skipSingle,
    childrenKey,
    selectable,
  };
}

// Core Logic
// ---------

function groupRecursive(
  data: Tree,
  configs: readonly GroupProcessConfig[],
): Groupeds {
  if (configs.length === 0 || data.length === 0) {
    return data;
  }

  const [current, ...rest] = configs;

  if (!current?.groupBy) {
    return groupRecursive(data, rest);
  }

  const { groups, ungrouped } = groupByField(data, current.groupBy);

  const processChildren = (items: Tree) =>
    rest.length > 0 ? groupRecursive(items, rest) : items;

  // 有分组的数据按当前配置处理
  const groupedNodes =
    groups.size > 0 ? processGroups(groups, current, processChildren) : [];

  // 无法分组的数据跳过当前层级，使用剩余配置处理
  const ungroupedNodes =
    ungrouped.length > 0 ? groupRecursive(ungrouped, rest) : [];

  return [...groupedNodes, ...ungroupedNodes];
}

export function tableGrouping(
  data: Tree = [],
  groupConfigs: Groups = [],
): Groupeds {
  if (data.length === 0) {
    return data;
  }

  const configs = (Array.isArray(groupConfigs) ? groupConfigs : [groupConfigs])
    .map((c) => normalizeConfig(c))
    .filter((c): c is GroupProcessConfig => c !== undefined);

  return groupRecursive(data, configs);
}
