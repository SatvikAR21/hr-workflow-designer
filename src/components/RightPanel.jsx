export default function RightPanel() {
  return (
    <div className="right-panel">
      <input
        placeholder="Search here..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      <div className="card">
        <div className="card-title">Automation Coverage</div>
        <div style={{ height: "6px", background: "#ddd", borderRadius: "6px" }}>
          <div
            style={{
              height: "6px",
              width: "72%",
              background: "green",
              borderRadius: "6px",
            }}
          ></div>
        </div>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Your last week is better 72%
        </p>
      </div>

      <div className="card">
        <div className="card-title">Workflow A</div>
        <p>Triggered by User Actions</p>
      </div>

      <div className="card">
        <div className="card-title">Workflow B</div>
        <p>Scheduled Automation</p>
      </div>
    </div>
  );
}
