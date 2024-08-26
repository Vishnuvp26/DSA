class hashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size)
    };

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    };

    set(key, value) {
        const index = this.hash(key)
        this.table[index] = { key, value };
    };

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    };

    
}