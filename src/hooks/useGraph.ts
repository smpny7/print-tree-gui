import { useCallback, useEffect, useState } from "react";
import { Edge as VisEdge, Node as VisNode } from "react-graph-vis";

export const useGraph = (initialText: string) => {
  const [visEdges, setVisEdges] = useState<VisEdge[]>([]);
  const [visNodes, setVisNodes] = useState<VisNode[]>([]);
  const [text, setText] = useState<string>(initialText);
  const [isValidFormat, setIsValidFormat] = useState<boolean>(true);

  type Node = {
    type: string;
    varName: string;
    value: string;
    child: Node[];
    brother: Node[];
  };

  const generateGraph = useCallback(
    (
      node: Node,
      data: [
        edges: VisEdge[],
        nodes: VisNode[],
        parentNodes: number[],
        currentNode: number
      ] = [[], [], [0], 0]
    ) => {
      let [edges, nodes, parentNodes, currentNode] = data;

      currentNode++;
      if (node.varName !== "null" && node.value !== "null")
        nodes.push({
          color: "orange",
          id: currentNode.toString(),
          label: `${node.varName}[${node.value}]\n[${node.type}]`,
          shape: "box",
          size: 100,
        });
      else if (node.varName !== "null")
        nodes.push({
          color: "orange",
          id: currentNode.toString(),
          label: `${node.varName}\n[${node.type}]`,
          shape: "box",
          size: 100,
        });
      else if (node.value !== "null")
        nodes.push({
          color: "orange",
          id: currentNode.toString(),
          label: `${node.value}\n[${node.type}]`,
          shape: "box",
          size: 100,
        });
      else
        nodes.push({
          color: "skyblue",
          id: currentNode.toString(),
          label: node.type,
          shape: "circle",
          size: 40,
        });

      edges.push({
        from: parentNodes.slice(-1)[0].toString(),
        to: currentNode.toString(),
      });

      if (node.child[0]) {
        parentNodes.push(currentNode);
        [edges, nodes, parentNodes, currentNode] = generateGraph(
          node.child[0],
          [edges, nodes, parentNodes, currentNode]
        );
        parentNodes.pop();
      }

      if (node.brother[0])
        [edges, nodes, parentNodes, currentNode] = generateGraph(
          node.brother[0],
          [edges, nodes, parentNodes, currentNode]
        );

      return [edges, nodes, parentNodes, currentNode] as [
        edges: VisEdge[],
        nodes: VisNode[],
        parentNodes: number[],
        currentNode: number
      ];
    },
    []
  );

  useEffect(() => {
    try {
      const node = JSON.parse(text);
      var [edges, nodes] = generateGraph(node);

      setIsValidFormat(true);
      setVisEdges(edges);
      setVisNodes(nodes);
    } catch (e) {
      setIsValidFormat(false);
      setVisEdges([]);
      setVisNodes([]);
    }
  }, [generateGraph, text]);

  return [visEdges, visNodes, text, isValidFormat, setText] as const;
};
