import { get } from 'es-toolkit/compat';

export type UnknownObject = Record<string, unknown>;

export type Getter = string | string[] | ((data: UnknownObject) => unknown);

export function getBy(data: UnknownObject, getter: Getter): unknown {
  if (typeof getter === 'function') {
    return getter(data);
  }

  return get(data, getter);
}

export type Condition =
  | {
      when: string;
      const?: unknown;
      enum?: unknown[];
      reverse?: boolean;
    }
  | ((item: UnknownObject) => boolean);

export function doCondition(data: UnknownObject, matcher: Condition): boolean {
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
