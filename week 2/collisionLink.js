// Define the Node class for the linked list
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null; // Reference to the next node in the list
    }
}

// Define the HashTable class
class HashTable {
    constructor(size = 30) {
        this.table = new Array(size);
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
        const newNode = new Node(key, value);

        if (!this.table[index]) {
            // If there's no list at this index, start a new list
            this.table[index] = newNode;
        } else {
            // Traverse the list to see if the key already exists
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    // Update value if key already exists
                    current.value = value;
                    return;
                }
                if (!current.next) break;
                current = current.next;
            }
            // Add new node to the end of the list
            current.next = newNode;
        }
    };

    // Retrieve the value for a given key
    get(key) {
        const index = this.hash(key);
        let current = this.table[index];
        while (current) {
            if (current.key === key) return current.value;
            current = current.next;
        }
        return undefined; // Key not found
    };

    // Remove a key-value pair
    remove(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let previous = null;
        while (current) {
            if (current.key === key) {
                if (previous) {
                    // Remove node from middle or end
                    previous.next = current.next;
                } else {
                    // Remove node from start
                    this.table[index] = current.next;
                }
                return;
            }
            previous = current;
            current = current.next;
        }
    };

    // Display all key-value pairs in the hash table
    display() {
        for (let i = 0; i < this.table.length; i++) {
            let current = this.table[i];
            while (current) {
                console.log(i, { key: current.key, value: current.value });
                current = current.next;
            }
        }
    };
}

// Example usage

const table = new HashTable();

table.set("name", "vish");
table.set("age", "25");
table.display();

table.set("mane", "resh");
table.display();