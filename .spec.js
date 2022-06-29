const { expect, describe, test } = require('@jest/globals');
const { Stream } = require('./iterator');
describe('Stream', () => {
  test('itreator', () => {
    const obj = new Stream([4, 5, 6]);
    const res = obj.iterator();
    expect(res).toEqual(4);
  });
  test('iterator for sets', () => {
    const myset = new Set();
    myset.add(1);
    myset.add({ a: 10, b: 20 });
    const obj = new Stream(myset);
    const res = obj.iterator();
    expect(res).toBeDefined;
  });
  test('previous element', () => {
    const myset = new Set();
    myset.add(1);
    myset.add(2);
    const obj = new Stream(myset);
    const res1 = obj.iterator();
    expect(res1).toBe(1);
    obj.iterator();
    const res2 = obj.previous();
    expect(res2).toBe(1);
  });
  test('checking previous element for the very first element should throw error', () => {
    const myset = new Set();
    myset.add(1);
    myset.add(2);
    const obj = new Stream(myset);
    let res = obj.previous();
    expect(res).toBeUndefined();
  });
});

describe('Should fail to execute when an empty collection is sent as input', () => {
  test('iterator', () => {
    const obj = new Stream();
    // const res = obj.iterator()
    expect(() => {
      obj.iterator();
    }).toThrow();
  });
  test('display', () => {
    const obj = new Stream();
    expect(() => {
      obj.display();
    }).toThrow();
  });
});
