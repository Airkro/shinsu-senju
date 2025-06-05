import { get } from 'lodash-es';

export type DataRecord = {
  [key: string]: unknown;
  children?: DataRecord[];
};

/**
 * 从对象中获取指定路径的值，支持点号分隔的路径
 * @param object - 源对象
 * @param path - 属性路径
 * @returns 属性值
 */
export function getBy(object: DataRecord, path: string): unknown {
  return path.includes('.') ? get(object, path) : object[path];
}
