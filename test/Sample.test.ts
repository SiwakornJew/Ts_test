// merge.test.ts
import { merge } from '../src/Sample';

test('merge two sorted arrays', () => {
    const collection1 = [1,3,5,7,9];
    const collection2 = [2,4,6,8,10];
    const expectedResult = [1,2,3,4,5,6,7,8,9,10];
    expect(merge(collection1, collection2)).toEqual(expectedResult);
});

test('merge col2 > col1 ',()=>{
    const collection1 = [1,3,5,7];
    const collection2 = [50,100,102];
    const expectedResult = [1,3,5,7,50,100,102];
    expect(merge(collection1, collection2)).toEqual(expectedResult);
});
