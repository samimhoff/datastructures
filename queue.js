class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  add(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  remove() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--
    return temp.val;
  }
}

let newQ = new Queue();
console.log(newQ.add(10));
console.log(newQ.add(20));
console.log(newQ.add(30));
console.log(newQ.remove());
console.log(newQ.remove());
console.log(newQ.remove());

















// class Queue {
//   constructor() {
//     this.height = 0;
//     this.floor = 0;
//     this.top = null;
//     this.bottom = null;
//   }
//   add(val) {
//     let newNode = new Node(val);
//     if (this.top === this.bottom) {
//       this.bottom = newNode;
//     } else {
//       this.top.next = newNode;
//     }
//     this.top = newNode;
//     this.height++;
//     return this.height;
//   }
//   remove() {
//     if(!this.top) return null;
//     let oldBottom = this.bottom;
//     if (this.top === this.bottom) {
//       this.top = null;
//       this.bottom = null;
//     } else {
//       this.bottom = this.bottom.next;
//     }
//     this.floor++;
//     return oldBottom;
//   }
// }


