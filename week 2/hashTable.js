class HashTable {
    constructor(size = 30) {
        this.table = new Array(size);
        this.size = size;
    };

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    };

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = { key, value };
    };

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    };

    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            delete this.table[index];
        }
    };

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    };
};  

const table = new HashTable();

table.set("name", "vish");
table.set("age", "25");
table.display();

table.set("mane", "resh");
table.display();

// console.log('Value for "abc":', table.get("abc"));
// console.log('Value for "cba":', table.get("cba"));