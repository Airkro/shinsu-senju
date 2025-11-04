import { customSort } from './sort.ts';
import type { Tree, TreeNode } from './tree-mapper.ts';
import { getBy } from './utils.ts';
import type { Getter, UnknownObject } from './utils.ts';

// Types
// -----

/**
 * 字段值类型，表示从数据记录中提取的值
 * 可以是任何类型，但通常是字符串、数字或布尔值
 */
export type FieldValue = unknown;

/**
 * 分组节点接口，表示树中的一个分组
 */
export interface GroupNode extends UnknownObject {
  /** 节点元数据 */
  readonly $group: GroupProcessConfig;
  readonly label: unknown;
  readonly value: unknown;
  /** 子节点列表 */
  readonly children: Groupeds;
}

/**
 * 树形节点类型，可以是数据记录或分组节点
 */
export type Grouped = TreeNode | GroupNode;

/**
 * 树形结构数据类型
 */
export type Groupeds = Grouped[];

/**
 * 分组配置接口，定义如何对数据进行分组
 */
export interface GroupConfig extends Record<string, unknown> {
  /** 分组依据的字段名 */
  readonly groupBy?: Getter;
  /** 分组标签的字段名，默认使用 groupBy 的值 */
  readonly labelBy?: Getter;
  readonly extraBy?: Getter;
  /** 用于排序的字段名 */
  readonly sortBy?: Getter;
  /** 是否跳过单个子项的分组 */
  readonly skipSingle?: boolean;
}

/**
 * 分组配置类型，可以是单个配置或配置数组
 */
export type Groups = GroupConfig | readonly GroupConfig[];

/**
 * 分组处理配置接口
 */
interface GroupProcessConfig {
  /** 分组依据的字段名 */
  readonly groupBy: Getter;
  /** 分组标签的字段名 */
  readonly labelBy: Getter;
  readonly extraBy: Getter;
  /** 用于排序的字段名 */
  readonly sortBy: Getter;
  /** 是否跳过单个子项的分组 */
  readonly skipSingle: boolean;
}

// Core Logic
// ---------

/**
 * 将数据项添加到分组映射中
 * @param groups - 分组映射
 * @param key - 分组键
 * @param item - 数据项
 */
function addToGroup(
  groups: Map<FieldValue, Tree>,
  key: FieldValue,
  item: TreeNode,
): void {
  if (!groups.has(key)) {
    groups.set(key, []);
  }

  const arr = groups.get(key);

  if (arr) {
    arr.push(item);
  }
}

/**
 * 按指定字段对数据进行分组
 * @param data - 数据记录数组
 * @param groupBy - 分组字段名
 * @returns 分组后的 Map 对象和未分组的数据项
 */
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
      addToGroup(groups, key, item);
    }
  }

  return { groups, ungrouped };
}

function groupRecursive(
  data: Tree,
  configs: readonly GroupProcessConfig[],
): Groupeds {
  if (configs.length === 0) {
    return data;
  }

  const [current, ...rest] = configs;

  if (!current?.groupBy) {
    return groupRecursive(data, rest);
  }

  const { groupBy, labelBy, extraBy, skipSingle, sortBy } = current;
  const { groups, ungrouped } = groupByField(data, groupBy);
  const nodes: Groupeds = [];

  for (const [value, items] of groups) {
    if (items.length === 1 && skipSingle && items[0] !== undefined) {
      nodes.push(items[0]);
    } else {
      const io = {
        $group: current,
        label: items
          .map((item) => getBy(item.$original, labelBy))
          .find((item) => item !== undefined),
        ...(extraBy
          ? {
              extra: items
                .map((item) => getBy(item.$original, extraBy))
                .find((item) => item !== undefined),
            }
          : undefined),
        value,
        selectable: false,
        children: rest.length > 0 ? groupRecursive(items, rest) : items,
      };

      if (!globalThis.DEBUG) {
        Object.defineProperty(io, '$group', {
          enumerable: false,
        });
      }

      nodes.push(io);
    }
  }

  const processedUngrouped =
    rest.length > 0 ? groupRecursive(ungrouped, rest) : ungrouped;

  return [...nodes, ...processedUngrouped].toSorted((a, b) =>
    customSort(getBy(a, sortBy), getBy(b, sortBy)),
  );
}

/**
 * 将表格数据转换为树形结构
 * @param data - 源数据记录数组
 * @param groupConfigs - 分组配置，可以是单个配置或配置数组
 * @returns 树形结构数据
 */
export function tableGrouping(
  data: Tree = [],
  groupConfigs: Groups = [],
): Groupeds {
  if (data.length === 0) {
    return data;
  }

  const configs = (
    Array.isArray(groupConfigs) ? groupConfigs : [groupConfigs]
  ).map(
    ({
      skipSingle = false,
      groupBy,
      labelBy = groupBy,
      extraBy,
      sortBy = labelBy,
    }) => ({
      groupBy,
      labelBy,
      sortBy,
      extraBy,
      skipSingle,
    }),
  );

  return groupRecursive(data, configs);
}
