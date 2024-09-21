class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    };

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
        }
    };

};

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();