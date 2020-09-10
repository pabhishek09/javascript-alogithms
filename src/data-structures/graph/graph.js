
//   2 -- 0
//  / \
// 1 - 3

// Edge List
// [[0, 2], [2, 3], [2, 1], [1, 3]]

// Adjacency  List
// [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacency Matrix

// [
//   [0, 0, 1, 0],
//   [0, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 0]
// ]

class Graph {

  constructor() {
    this.length = 0;
    this.adjacencyList = {};
  }

  addNode(node) {
    this.adjacencyList[node] = [];
    this.length++;
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  show() {
    console.log('Printing the graph');
    for (let node in this.adjacencyList) {
      console.log(`${node} --> ${this.adjacencyList[node]}`);
    }
  }
}

export default Graph;
