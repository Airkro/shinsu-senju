import { stringify } from 'javascript-stringify';
import type { SnapshotSerializer } from 'vitest';

function print(val: unknown) {
  return `export default ${stringify(val, null, 2)}`;
}

interface SnapshotValue {
  $root: boolean;
  name: string;
  description: string;
  options: unknown;
  data: unknown;
  tableGrouping: unknown;
  treeMapper: unknown;
}

const printSection = (title: string, content: unknown): string[] =>
  content === undefined
    ? []
    : ['', `### ${title}`, '```js', print(content) ?? '', '```'];

export default {
  test(value: unknown): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      '$root' in value &&
      (value as SnapshotValue).$root === true
    );
  },

  serialize(value: unknown): string {
    const {
      $root,
      name = '',
      description = '',
      options,
      data,
      ...rest
    } = value as SnapshotValue;

    const sections: string[] = [
      `# Snapshot ${name}`,
      '',
      description,
      '',
      '## Input',
      ...printSection('Options', options),
      ...printSection('Data', data),
      '',
      '## Output',
      ...Object.entries(rest).flatMap(([key, io]) => printSection(key, io)),
    ];

    return sections.join('\n');
  },
} satisfies SnapshotSerializer;
