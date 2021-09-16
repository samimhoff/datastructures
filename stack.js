class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.next = newNode;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let popped = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return popped.val;
  }
}

let stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(10));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
