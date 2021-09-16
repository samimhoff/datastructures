class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) return this.root = newNode;
    let searching = true;
    let current = this.root;
    while (searching) {
      if (val === current.val) return undefined;
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (val === current.val) return true;
      if (val > current.val) {
        if (!current.right) return false;
        current = current.right;
      } else {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }
  breadthFirst() {
    let q = [this.root];
    let visited = [];
    while (q.length) {
      let deq = q.shift();
      visited.push(deq.val);
      if (deq.left) q.push(deq.left);
      if (deq.right) q.push(deq.right);
    }
    return visited;
  }
  depthFirstPreOrder() {
    let visited = [];
    const recurse = (node) => {
      visited.push(node.val);
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
    }
    recurse(this.root);
    return visited;
  }
  depthFirstPostOrder() {
    let visited = [];
    const recurse = (node) => {
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
      visited.push(node.val);
    }
    recurse(this.root);
    return visited;
  }
  depthFirstInOrder() {
    let visited = [];
    const recurse = (node) => {
      if (node.left) recurse(node.left);
      visited.push(node.val);
      if (node.right) recurse(node.right);
    }
    recurse(this.root);
    return visited;

  }
}
//               5
//       4               10
//  2        3       8       11
//                      9
//
//
//
//
//
//
//
//
let binary = new BinarySearchTree;
console.log(binary.insert(5));
console.log(binary.insert(10));
console.log(binary.insert(4));
console.log(binary.insert(8));
console.log(binary.insert(2));
console.log(binary.insert(3));
console.log(binary.insert(11));
console.log(binary.insert(9));
console.log(binary.breadthFirst());
console.log(binary.depthFirstPostOrder());





