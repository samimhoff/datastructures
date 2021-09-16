class MaxBinaryHeap{
  constructor() {
    this.values = [41,39,33,18,27,12];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index-1)/2);
    while (this.values[index] > this.values[parentIndex]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index-1)/2);
    }
    return this.values;
  }
  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    let extracted = this.values[0];
    let last = this.values.pop();
    this.values[0] = last;
    this.sinkDown();
    return extracted;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = false;
      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
          swap = rightChildIdx;
        }
      }
      if(swap === false) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();
console.log(heap.insert(100));
console.log(heap.insert(30));
console.log(heap.insert(50));
console.log(heap.extractMax());
console.log(heap.insert(20));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());




