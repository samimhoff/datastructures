class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      console.error('Vertex already exists on graph');
    }
  }
  addEdge(vert1, vert2) {
    if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
      this.adjacencyList[vert1].push(vert2);
      this.adjacencyList[vert2].push(vert1);
    } else {
      console.error('Either one or both of these vertices don\'t exist');
    }
  }
  removeEdge(vert1, vert2) {
    if (this.adjacencyList[vert1] && this.adjacencyList[vert2]) {
      this.adjacencyList[vert1].push(vert2);
      this.adjacencyList[vert2].push(vert1);
    } else {
      console.error('Either one or both of these vertices don\'t exist!');
    }
  }
}