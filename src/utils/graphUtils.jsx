import React from 'react'

const nodes = [
  { type: 'start', label: 'Start' },
  { type: 'task', label: 'Task' },
  { type: 'approval', label: 'Approval' },
  { type: 'automated', label: 'Automated' },
  { type: 'end', label: 'End' }
]

export default function Sidebar() {
  const onDragStart = (e, type) => {
    e.dataTransfer.setData("application/reactflow", type)
    e.dataTransfer.effectAllowed = "move"
  }

  return (
    <div className="left">
      <h3>Nodes</h3>
      {nodes.map(n => (
        <div
          key={n.type}
          draggable
          onDragStart={e => onDragStart(e, n.type)}
          className="sidebar-button"
        >
          {n.label}
        </div>
      ))}
    </div>
  )
}
export function defaultDataForType(type) {
  switch (type) {
    case 'start':
      return { title: 'Start' }
    case 'task':
      return { title: 'Task', description: '', assignee: '' }
    case 'approval':
      return { title: 'Approval', approverRole: '' }
    case 'automated':
      return { title: 'Automated', actionId: '', params: {} }
    case 'end':
      return { title: 'End' }
    default:
      return { title: 'Node' }
  }
}
