class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
      return true;
    }

    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1);
      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      this.adjList[vertex1] = this.adjList[vertex1].filter((ver) => ver !== vertex2);
      this.adjList[vertex2] = this.adjList[vertex2].filter((ver) => ver !== vertex1);

      return true;
    }

    return false;
  }

  removeVertex(vertex) {
    if (this.adjList[vertex]) {
      while (this.adjList[vertex].length) {
        let temp = this.adjList[vertex].pop();
        this.adjList[temp] = this.adjList[temp].filter((ver) => ver !== vertex);
      }
      delete this.adjList[vertex];

      return this;
    }

    return undefined;
  }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'C');
myGraph.addEdge('D', 'C');
myGraph.addEdge('D', 'B');
myGraph.addEdge('D', 'A');

console.log(myGraph);

console.log(myGraph.removeVertex('A'));
