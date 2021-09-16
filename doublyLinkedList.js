class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//head is the beginning; tail is the end

class doublyLinked{
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    //figure out why this is wrong:
    let newNode = new Node(val);
    if (!this.head) this.head = newNode;
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return null;
    // if (this.tail === this.head) {

    // }
    let oldTail = this.tail;
    this.tail = this.tail.prev;
    this.length--;
    return oldTail;
  }
}
let doubly = new doublyLinked;
console.log(doubly.push(10));
console.log(doubly.push(20));
console.log(doubly.push(30));
