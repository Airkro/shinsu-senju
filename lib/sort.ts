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
    regex: /^(?<digits>[1-9]\d*)$/,
    pattern: 'onlyDigits',
  },
  {
    regex: /^(?<digits>[1-9]\d*)(?<suffix>\D+)$/,
    pattern: 'digitsFirst',
  },
  {
    regex: /^(?<prefix>\D+)(?<digits>[1-9]\d*)$/,
    pattern: 'digitsLast',
  },
  {
    regex: /^(?<prefix>\D+)(?<digits>[1-9]\d*)(?<suffix>\D+)$/,
    pattern: 'digitsMiddle',
  },
];

function extractParts(match: RegExpMatchArray): StringParts {
  const { groups } = match;

  return {
    digit: groups?.digits || '',
    ...(groups?.prefix && { prefix: groups.prefix }),
    ...(groups?.suffix && { suffix: groups.suffix }),
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
  if (a.pattern !== b.pattern) {
    return PATTERN_PRIORITY[a.pattern] - PATTERN_PRIORITY[b.pattern];
  }

  return undefined;
}

function compareByDigits(a: Parsed, b: Parsed): number | undefined {
  if (
    a.pattern === b.pattern &&
    hasSameNonDigitParts(a, b) &&
    a.parts.digit &&
    b.parts.digit
  ) {
    return (
      Number.parseInt(a.parts.digit, 10) - Number.parseInt(b.parts.digit, 10)
    );
  }

  return undefined;
}

function compareWithLocale(a: string, b: string): number {
  return a.localeCompare(b, 'zh-CN');
}

export function customSort(a: string, b: string): number {
  const strA = String(a);
  const strB = String(b);

  const basicResult = compareBasicCases(strA, strB);

  if (basicResult !== undefined) {
    return basicResult;
  }

  const parsedA = parseString(strA);
  const parsedB = parseString(strB);

  const patternResult = compareByPattern(parsedA, parsedB);

  if (patternResult !== undefined) {
    return patternResult;
  }

  const digitResult = compareByDigits(parsedA, parsedB);

  if (digitResult !== undefined) {
    return digitResult;
  }

  return compareWithLocale(strA, strB);
}
