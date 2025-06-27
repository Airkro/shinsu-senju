import { expect, it as test } from 'vitest';

import { customSort } from '../lib/sort.ts';

const sortStrings = (arr: string[]) => arr.toSorted(customSort);

test('纯数字排序', () => {
  const input = ['1', '01', '001', '2', '02', '002', '9', '11', '100'];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "1",
      "2",
      "9",
      "11",
      "100",
      "001",
      "002",
      "01",
      "02",
    ]
  `);
});

test('自然数排序', () => {
  const input = ['9', '11', '100', '1', '2', '10'];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "1",
      "2",
      "9",
      "10",
      "11",
      "100",
    ]
  `);
});

test('数字前缀排序', () => {
  const input = [
    '1号',
    '01号',
    '2室',
    '02室',
    '1厅',
    '01厅',
    '9号',
    '11号',
    '100号',
  ];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "1号",
      "1厅",
      "2室",
      "9号",
      "11号",
      "100号",
      "01号",
      "01厅",
      "02室",
    ]
  `);
});

test('前缀文本排序', () => {
  const input = [
    '房间1',
    '客厅1',
    '厨房1',
    '阳台1',
    '房间9',
    '房间11',
    '房间100',
  ];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "厨房1",
      "房间1",
      "房间9",
      "房间11",
      "房间100",
      "客厅1",
      "阳台1",
    ]
  `);
});

test('数字后缀排序', () => {
  const input = [
    '房间1',
    '房间01',
    '房间2',
    '房间02',
    '房间9',
    '房间11',
    '房间100',
  ];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "房间1",
      "房间2",
      "房间9",
      "房间11",
      "房间100",
      "房间01",
      "房间02",
    ]
  `);
});

test('混合场景排序', () => {
  const input = [
    '1号',
    '01号',
    '2号',
    '02号',
    '9号',
    '11号',
    '100号',
    '房间1',
    '房间01',
    '房间9',
    '房间11',
    '房间100',
    '1',
    '01',
    '9',
    '11',
    '100',
    '房间',
  ];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "1",
      "9",
      "11",
      "100",
      "1号",
      "2号",
      "9号",
      "11号",
      "100号",
      "房间1",
      "房间9",
      "房间11",
      "房间100",
      "01",
      "01号",
      "02号",
      "房间",
      "房间01",
    ]
  `);
});

test('中文排序', () => {
  const input = ['一号', '七号', '三号', '九号', '二号', '五号'];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "二号",
      "九号",
      "七号",
      "三号",
      "五号",
      "一号",
    ]
  `);
});

test('空字符串和特殊情况', () => {
  const input = ['', '0', '00', '000', '1', '01', '001', '9', '11', '100'];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "",
      "1",
      "9",
      "11",
      "100",
      "0",
      "00",
      "000",
      "001",
      "01",
    ]
  `);
});

test('前导零与自然数比较', () => {
  const input = [
    '01',
    '1',
    '001',
    '9',
    '09',
    '009',
    '11',
    '011',
    '0011',
    '100',
    '0100',
    '00100',
  ];
  expect(sortStrings(input)).toMatchInlineSnapshot(`
    [
      "1",
      "9",
      "11",
      "100",
      "001",
      "00100",
      "0011",
      "009",
      "01",
      "0100",
      "011",
      "09",
    ]
  `);
});
