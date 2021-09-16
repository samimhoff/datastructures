class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //          p  c
  //example: [7, 3, 2, 0, 10, 56, 8]
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    let newHead = oldHead.next;
    this.head = newHead;
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(n) {
    if (n < 0 || n >= this.length) return null;
    if (n === 0) return this.head;
    let temp = this.head;
    for (let i = 0; i < n; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(i, val) {
    let foundNode = this.get(i);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(i, val) {
    if (i < 0 || i > this.length) return false; //is this what to do?
    if (i === this.length) return !!this.push(val);
    if (i === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(i - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i > this.length) return undefined;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();

    let prevNode = this.get(i - 1);
    let deleteNode = prevNode.next;
    prevNode.next = deleteNode.next;
    this.length--;
    return deleteNode;
  }
//   head node1, next2, 3, 4 tail
//   tail 1, 2, 3, 4 head
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

let bist = new SinglyLinkedList;
bist.push(4);
bist.push(10);
bist.push(12);
bist.push(50);
bist.push(80);


console.log(bist.get(2));
console.log(bist.remove(2));
console.log(bist.get(2));
console.log(bist.get(3));


