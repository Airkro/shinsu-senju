type StringPattern =
  | 'onlyDigits'
  | 'digitsFirst'
  | 'digitsLast'
  | 'digitsMiddle'
  | 'other';

interface StringParts {
  prefix?: string;
  suffix?: string;
  digit: string;
}

interface Parsed {
  pattern: StringPattern;
  parts: StringParts;
}

interface PatternDefinition {
  regex: RegExp;
  pattern: StringPattern;
}

const PATTERN_PRIORITY: Record<StringPattern, number> = {
  onlyDigits: 1,
  digitsFirst: 2,
  digitsLast: 3,
  digitsMiddle: 4,
  other: 5,
};

const PATTERNS: PatternDefinition[] = [
  {
    regex: /^(?<digits>\d+)$/,
    pattern: 'onlyDigits',
  },
  {
    regex: /^(?<digits>\d+)(?<suffix>\D+)$/,
    pattern: 'digitsFirst',
  },
  {
    regex: /^(?<prefix>\D+)(?<digits>\d+)$/,
    pattern: 'digitsLast',
  },
  {
    regex: /^(?<prefix>\D+)(?<digits>\d+)(?<suffix>\D+)$/,
    pattern: 'digitsMiddle',
  },
];

function extractParts(match: RegExpMatchArray): StringParts {
  const { digits = '', prefix, suffix } = match.groups || {};

  return {
    digit: digits,
    ...(prefix && { prefix }),
    ...(suffix && { suffix }),
  };
}

function parseString(str: string): Parsed {
  for (const pattern of PATTERNS) {
    const match = str.match(pattern.regex);

    if (match?.groups?.digits) {
      return {
        pattern: pattern.pattern,
        parts: extractParts(match),
      };
    }
  }

  return {
    pattern: 'other',
    parts: { digit: '', prefix: str },
  };
}

function hasSameNonDigitParts(a: Parsed, b: Parsed): boolean {
  return (
    (a.parts.prefix ?? '') === (b.parts.prefix ?? '') &&
    (a.parts.suffix ?? '') === (b.parts.suffix ?? '')
  );
}

function compareBasicCases(strA: string, strB: string): number | undefined {
  if (strA === strB) {
    return 0;
  }

  if (!strA) {
    return -1;
  }

  if (!strB) {
    return 1;
  }

  return undefined;
}

function compareByPattern(a: Parsed, b: Parsed): number | undefined {
  return a.pattern === b.pattern
    ? undefined
    : PATTERN_PRIORITY[a.pattern] - PATTERN_PRIORITY[b.pattern];
}

function isZeroLeading(digit: string): boolean {
  return digit.length > 1 && digit.startsWith('0');
}

function compareZeroLeadingDigits(digitA: string, digitB: string): number {
  // 先按长度排序
  const lengthDiff = digitA.length - digitB.length;

  if (lengthDiff !== 0) {
    return lengthDiff;
  }

  // 长度相同，按字典序排序
  return digitA.localeCompare(digitB);
}

function compareByDigits(a: Parsed, b: Parsed): number | undefined {
  if (
    a.pattern !== b.pattern ||
    !hasSameNonDigitParts(a, b) ||
    !a.parts.digit ||
    !b.parts.digit
  ) {
    return undefined;
  }

  const aZeroLeading = isZeroLeading(a.parts.digit);
  const bZeroLeading = isZeroLeading(b.parts.digit);

  // 两个数字都是以0开头
  if (aZeroLeading && bZeroLeading) {
    return compareZeroLeadingDigits(a.parts.digit, b.parts.digit);
  }

  // 只有一个数字以0开头，将0开头的排在前面
  if (aZeroLeading !== bZeroLeading) {
    return aZeroLeading ? -1 : 1;
  }

  // 都不是以0开头，按自然数排序
  return (
    Number.parseInt(a.parts.digit, 10) - Number.parseInt(b.parts.digit, 10)
  );
}

function compareWithLocale(a: string, b: string): number {
  return a.localeCompare(b, 'zh-CN');
}

export function customSort(a: unknown, b: unknown): number {
  const strA = String(a);
  const strB = String(b);

  // 尝试基本比较
  const basicResult = compareBasicCases(strA, strB);

  if (basicResult !== undefined) {
    return basicResult;
  }

  // 解析字符串
  const parsedA = parseString(strA);
  const parsedB = parseString(strB);

  // 按模式比较
  const patternResult = compareByPattern(parsedA, parsedB);

  if (patternResult !== undefined) {
    return patternResult;
  }

  // 按数字比较
  const digitResult = compareByDigits(parsedA, parsedB);

  if (digitResult !== undefined) {
    return digitResult;
  }

  // 默认本地化比较
  return compareWithLocale(strA, strB);
}
