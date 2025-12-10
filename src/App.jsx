import Sidebar from "./components/Sidebar";
import WorkflowCanvas from "./components/Canvas/WorkflowCanvas";
import RightPanel from "./components/RightPanel";
import "./index.css";

export default function App() {
  return (
    <div className="main-layout">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="content-area">

        {/* TOP BAR */}
        <div className="topbar">
          <div>
            <h2>User Automation</h2>
            <p style={{ fontSize: "12px", color: "#777" }}>
              Overview of User Workflows
            </p>
          </div>

          <div>
            <button>Undo</button>
            <button>Redo</button>
            <button>Run</button>
          </div>
        </div>

        {/* CANVAS + RIGHT PANEL */}
        <div style={{ display: "flex", flex: 1 }}>
          <WorkflowCanvas />
          <RightPanel />
        </div>

      </div>

    </div>
  );
}
