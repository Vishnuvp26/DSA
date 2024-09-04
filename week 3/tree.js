class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };
    
    isEmpty() {
        return this.root === null;
    };
    
    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    };
    
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    };
    
    search(root, value) {
        if(!root) {
            return false;
        }
        else {
            if(root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    };

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };
    
    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    };
    
    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    };

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    };

    min(root) {
        if (!root.left) {
            return root.value; 
        } else {
            return this.min(root.left)
        }
    };

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right)
        }
    };
    
};

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log('Tree is empty?', bst.isEmpty())

console.log('Search for 10:', bst.search(bst.root, 10))

console.log('Search for 60:', bst.search(bst.root, 60))

console.log('Pre-Order Traversal:')
bst.preOrder(bst.root)

console.log('In-Order Traversal:')
bst.inOrder(bst.root)

console.log('Post-Order Traversal:');

bst.postOrder(bst.root)

console.log('BFS:')
bst.levelOrder()

console.log('Maximum value : ' + bst.max(bst.root))
console.log('Minimum value : ' + bst.min(bst.root))