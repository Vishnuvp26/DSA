class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    };

    // Insert a word into the Trie
    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    };

    // Search for a word in the Trie
    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    };

    // Check if any word starts with the given prefix
    prefix(word) {
        let current = this.root;
        for(let char of word) {
            if(!current.children[char]){
                return false;
            }
            current = current.children[char]
        }
        return true;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple"));    // true
console.log(trie.search("app"));      // true
console.log(trie.search("appl"));     // false
console.log(trie.prefix("app"));  // true
console.log(trie.prefix("apx"));  // false