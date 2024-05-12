declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Map<K, V> {
        ToArray<V>(this: Map<K, V>): V[];
    }
}

// eslint-disable-next-line func-names
Map.prototype.ToArray = function <K, V>(this: Map<K, V>) {
    return [...this.values()];
};

export { };
