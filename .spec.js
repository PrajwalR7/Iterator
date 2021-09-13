const { expect, describe, test } = require('@jest/globals');
const {Stream} = require('./iterator')
describe('Stream', () => {
    test('itreator', () => {
        const obj = new Stream([4,5,6])
        const res = obj.iterator();
        expect(res).toEqual(4);
    });
    test('iterator for sets', () => {
        const myset = new Set();
        myset.add(1);
        myset.add({a:10,b:20});
        const obj = new Stream(myset);
        const res = obj.iterator();
        expect(res).toBeDefined;
    });
});

describe('Should fail to execute when an empty collection is sent as input', () => {
    test('iterator', () => {
        const obj = new Stream();
        // const res = obj.iterator()
        expect(() =>{
            obj.iterator()
        }).toThrow("Collection has no element")
    });
    test('display', () => {
        const obj = new Stream();
        expect(() => {
            obj.display()
        }).toThrow("Collection has no element")
    });
});