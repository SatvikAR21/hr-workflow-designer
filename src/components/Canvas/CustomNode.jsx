import { Handle, Position } from "reactflow";
import "./CustomNode.css";

export default function CustomNode({ data }) {
  return (
    <div className={`custom-node ${data.type}`}>
      {/* ICON + TITLE */}
      <div className="node-header">
        <div className="node-icon">{data.icon}</div>
        <div>
          <div className="node-title">{data.title}</div>
          <div className="node-subtitle">{data.subtitle}</div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        {data.metrics?.map((m, idx) => (
          <div key={idx} className={`metric metric-${m.color}`}>
            {m.value}
          </div>
        ))}
      </div>

      {/* HANDLES */}
      <Handle type="target" position={Position.Top} className="handle" />
      <Handle type="source" position={Position.Bottom} className="handle" />
      <Handle type="source" position={Position.Left} className="handle" />
      <Handle type="target" position={Position.Right} className="handle" />
    </div>
  );
}
