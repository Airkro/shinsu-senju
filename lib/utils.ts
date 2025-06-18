import { get } from 'lodash-es';

type Data = Record<string, unknown>;

export interface DataRecord extends Data {
  children?: DataRecord[];
}

/**
 * 从对象中获取指定路径的值，支持点号分隔的路径
 * @param object - 源对象
 * @param path - 属性路径
 * @returns 属性值
 */
export function getBy(object: Data, path: string): unknown {
  return path.includes('.') ? get(object, path) : object[path];
}

export type Condition =
  | {
      when: string;
      const?: unknown;
      enum?: unknown[];
      reverse?: boolean;
    }
  | ((item: Data) => boolean);

export function doCondition(data: Data, matcher: Condition): boolean {
  if (typeof matcher === 'function') {
    return matcher(data);
  }

  const io = matcher.const
    ? getBy(data, matcher.when) === matcher.const
    : matcher.enum
      ? matcher.enum.includes(getBy(data, matcher.when))
      : Boolean(getBy(data, matcher.when));

  return matcher.reverse ? !io : io;
}
