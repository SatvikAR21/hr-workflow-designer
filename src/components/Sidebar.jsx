export default function Sidebar() {
  const items = [
    "Dashboard",
    "Compliance",
    "Scheduler",
    "Analytics",
    "Integrations",
    "Repository",
    "Workflows",

    "NEW: Actions",
    "NEW: Validations",
    "NEW: Outputs",
    "NEW: Triggers",
    "NEW: Forms",
    "NEW: User Stages",
  ];

  return (
    <div className="sidebar">
      <h2>CodeAuto</h2>

      {items.map((item) => (
        <div key={item} className="sidebar-item">
          {item}
        </div>
      ))}
    </div>
  );
}
