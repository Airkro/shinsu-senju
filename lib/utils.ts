import { get } from 'es-toolkit/compat';

export type UnknownObject = Record<string, unknown>;

export type Getter = string | string[] | ((data: UnknownObject) => unknown);

export function getBy(data: UnknownObject, getter: Getter): unknown {
  if (typeof getter === 'function') {
    return getter(data);
  }

  return get(data, getter);
}

type Matched = number | string | boolean | bigint | null;

export type Condition =
  | {
      when: Getter;
      const?: Matched;
      enum?: Matched[];
      reverse?: boolean;
    }
  | ((item: UnknownObject) => boolean);

export function doCondition(data: UnknownObject, matcher: Condition): boolean {
  if (typeof matcher === 'function') {
    return matcher(data);
  }

  const target = getBy(data, matcher.when) as Matched;

  const io =
    matcher.const === undefined
      ? matcher.enum === undefined
        ? Boolean(target)
        : matcher.enum.includes(target)
      : target === matcher.const;

  return matcher.reverse ? !io : io;
}
