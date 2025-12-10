import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";

const nodeTypes = {
  customNode: CustomNode,
};

export default function WorkflowCanvas() {
  const initialNodes = [
    {
      id: "1",
      type: "customNode",
      position: { x: 250, y: 40 },
      data: {
        type: "start",
        icon: "▶",
        title: "User Initializing",
        subtitle: "Initializing for Automation",
        metrics: [
          { value: 11, color: "blue" },
          { value: 27, color: "green" },
          { value: 41, color: "purple" },
          { value: 72, color: "red" },
        ],
      },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 250, y: 250 },
      data: {
        type: "validation",
        icon: "✔",
        title: "Data Validation",
        subtitle: "Ensuring Data Accuracy",
        metrics: [
          { value: 91, color: "blue" },
          { value: 18, color: "red" },
          { value: 20, color: "green" },
        ],
      },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 250, y: 460 },
      data: {
        type: "action",
        icon: "⚡",
        title: "Action Trigger",
        subtitle: "Performing Task Conditions",
        metrics: [
          { value: 87, color: "blue" },
          { value: 34, color: "purple" },
          { value: 17, color: "red" },
        ],
      },
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="canvas-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background color="#d4d4d4" gap={24} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
