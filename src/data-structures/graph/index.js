import Graph from './graph';

const  graph1 = new Graph();


graph1.addNode(0);
graph1.addNode(1);
graph1.addNode(2);
graph1.addNode(3);

graph1.addEdge(0, 2);
graph1.addEdge(2, 3);
graph1.addEdge(2, 1);
graph1.addEdge(1, 3);

graph1.show();