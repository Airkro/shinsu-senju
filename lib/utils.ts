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

// 检查字符串是否以数字结尾
const endsWithNumber = (str: string) => /\d$/.test(String(str));

// 提取数字部分
const getNumber = (str: string) => {
  const match = String(str).match(/\d+$/);

  return match ? Number.parseInt(match[0], 10) : 0;
};

export function customSort(a: string, b: string) {
  // 比较函数
  if (endsWithNumber(a) && endsWithNumber(b)) {
    const numberA = getNumber(a);
    const numberB = getNumber(b);

    // 如果数字相同，按字典序排序
    if (numberA === numberB) {
      return a.localeCompare(b, 'zh-CN');
    }

    // 数字A的数字部分大于数字B，则A排在B前面
    return numberA < numberB ? -1 : 1;
  }

  // 如果只有a以数字结尾，则a排在b前面
  if (endsWithNumber(a)) {
    return -1;
  }

  // 如果只有b以数字结尾，则b排在a前面
  if (endsWithNumber(b)) {
    return 1;
  }

  // 如果都不以数字结尾，按字典序排序
  return a.localeCompare(b, 'zh-CN');
}
