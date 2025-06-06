import type { SnapshotSerializer } from 'vitest';

interface SnapshotValue {
  $root: boolean;
  name: string;
  description: string;
  options: unknown;
  data: unknown;
  table2tree: unknown;
  treeMapper: unknown;
}

const printSection = (
  printer: (val: unknown) => string,
  title: string,
  content: unknown,
): string[] =>
  content === undefined
    ? []
    : ['', `### ${title}`, '```json5', printer(content), '```'];

export default {
  test(value: unknown): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      '$root' in value &&
      (value as SnapshotValue).$root === true
    );
  },

  serialize(value: unknown, config, indent, depth, refs, printer): string {
    const {
      $root,
      name = '',
      description = '',
      options,
      data,
      ...rest
    } = value as SnapshotValue;

    const print = (io) => printer(io, config, indent, depth, refs);

    const sections: string[] = [
      `# Snapshot ${name}`,
      '',
      description,
      '',
      '## Input',
      ...printSection(print, 'Options', options),
      ...printSection(print, 'Data', data),
      '',
      '## Output',
      ...Object.entries(rest).flatMap(([key, io]) =>
        printSection(print, key, io),
      ),
    ];

    return sections.join('\n');
  },
} satisfies SnapshotSerializer;
