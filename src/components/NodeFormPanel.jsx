import React, { useState, useEffect } from 'react'
import { getAutomations } from '../api/automations'

export default function NodeFormPanel({ selectedNode, onUpdate }) {
  const [local, setLocal] = useState(null)
  const [actions, setActions] = useState([])

  useEffect(() => {
    if (selectedNode) setLocal({ ...selectedNode })
  }, [selectedNode])

  useEffect(() => {
    getAutomations().then(setActions)
  }, [])

  if (!local) return <div>Select a node</div>

  const updateField = (key, value) => {
    setLocal(l => ({
      ...l,
      data: { ...l.data, [key]: value }
    }))
  }

  return (
    <div>
      <h3>Edit Node</h3>

      <label>Title</label>
      <input
        value={local.data.title || ""}
        onChange={e => updateField("title", e.target.value)}
      />

      {local.data.actionId !== undefined && (
        <>
          <label>Automation Action</label>
          <select
            value={local.data.actionId}
            onChange={e => updateField("actionId", e.target.value)}
          >
            <option value="">--select--</option>
            {actions.map(a => (
              <option key={a.id} value={a.id}>{a.label}</option>
            ))}
          </select>
        </>
      )}

      <button onClick={() => onUpdate(local)}>Save</button>
    </div>
  )
}
