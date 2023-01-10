export function merge(collection1: number[], collection2: number[]): number[] {
    if (collection1.length === 0) {
        return collection2;
    } else if (collection2.length === 0) {
        return collection1;
    } else if (collection1[0] < collection2[0]) {
        return [collection1[0], ...merge(collection1.slice(1), collection2)];
    } else {
        return [collection2[0], ...merge(collection1, collection2.slice(1))];
    }
}
