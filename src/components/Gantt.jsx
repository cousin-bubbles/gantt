import React from 'react'

// Very small placeholder gantt renderer for MVP.
// Renders tasks as simple bars positioned by date relative to earliest task.

function daysBetween(a, b) {
  const A = new Date(a)
  const B = new Date(b)
  const ms = B - A
  return Math.round(ms / (1000 * 60 * 60 * 24))
}

export default function Gantt({ tasks = [], onUpdate = () => {} }) {
  if (!tasks.length) return <div className="empty">Add tasks to see the timeline</div>

  const dates = tasks.flatMap(t => [t.start, t.end]).filter(Boolean)
  const minDate = dates.reduce((a, b) => a < b ? a : b)

  return (
    <div className="gantt">
      {tasks.map(task => {
        const offset = daysBetween(minDate, task.start)
        const length = Math.max(1, daysBetween(task.start, task.end) + 1)
        return (
          <div className="gantt-row" key={task.id}>
            <div className="gantt-bar" style={{ marginLeft: `${offset * 12}px`, width: `${length * 12}px` }} title={`${task.title} (${task.start} → ${task.end})`}>
              {task.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}