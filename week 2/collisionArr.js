class HashTable {
    constructor(size = 30) {
        this.table = new Array(size).fill(null).map(() => []);
        this.size = size;
    };

    // Hash function to compute the index for a given key
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    };

    // Insert or update a key-value pair
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        // Check if the key already exists in the bucket
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                // Update value if key already exists
                bucket[i].value = value;
                return;
            }
        }
        
        // Add new key-value pair to the end of the bucket
        bucket.push({ key, value });
    };

    // Retrieve the value for a given key
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        // Search through the bucket for the key
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }
        return undefined; // Key not found
    };

    // Remove a key-value pair
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        // Find and remove the key-value pair
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    };

    // Display all key-value pairs in the hash table
    display() {
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            for (let j = 0; j < bucket.length; j++) {
                console.log(i, bucket[j]);
            }
        }
    };
}

// Example usage
const table = new HashTable();

table.set("name", "vish");
table.set("age", "25");

table.set("mane", "resh");
table.display();

console.log("Removing 'age':");
table.remove("age");
table.display();