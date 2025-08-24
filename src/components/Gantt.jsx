import React, { useState, useRef, useCallback } from 'react'

// Enhanced Gantt renderer for MVP with drag interactions
// Renders tasks as bars positioned by date with timeline axis

function daysBetween(a, b) {
  const A = new Date(a)
  const B = new Date(b)
  const ms = B - A
  return Math.round(ms / (1000 * 60 * 60 * 24))
}

function addDays(dateStr, days) {
  const date = new Date(dateStr)
  date.setDate(date.getDate() + days)
  return date.toISOString().slice(0, 10)
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function Gantt({ tasks = [], onUpdate = () => {}, selectedTaskId = null, onSelectTask = () => {} }) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragTask, setDragTask] = useState(null)
  const [dragType, setDragType] = useState(null) // 'move' or 'resize-start' or 'resize-end'
  const [dragStartX, setDragStartX] = useState(0)
  const [dragStartDate, setDragStartDate] = useState(null)
  const ganttRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !dragTask) return

    const deltaX = e.clientX - dragStartX
    const dayWidth = 40
    const daysDelta = Math.round(deltaX / dayWidth)
    
    if (daysDelta === 0) return

    const newTask = { ...dragTask }
    
    if (dragType === 'move') {
      newTask.start = addDays(dragTask.start, daysDelta)
      newTask.end = addDays(dragTask.end, daysDelta)
    } else if (dragType === 'resize-start') {
      const newStart = addDays(dragTask.start, daysDelta)
      if (newStart <= dragTask.end) {
        newTask.start = newStart
      }
    } else if (dragType === 'resize-end') {
      const newEnd = addDays(dragTask.end, daysDelta)
      if (newEnd >= dragTask.start) {
        newTask.end = newEnd
      }
    }

    onUpdate(newTask)
  }, [isDragging, dragTask, dragStartX, dragType, onUpdate])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setDragTask(null)
    setDragType(null)
  }, [])

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  if (!tasks.length) return <div className="empty">Add tasks to see the timeline</div>

  const dates = tasks.flatMap(t => [t.start, t.end]).filter(Boolean)
  const minDate = dates.reduce((a, b) => a < b ? a : b)
  const maxDate = dates.reduce((a, b) => a > b ? a : b)
  const totalDays = daysBetween(minDate, maxDate) + 1
  const dayWidth = 40 // Increased from 12px for better interactions

  // Generate timeline header
  const timelineHeaders = []
  for (let i = 0; i < Math.max(totalDays, 7); i++) {
    const date = addDays(minDate, i)
    timelineHeaders.push(date)
  }

  const handleMouseDown = (e, task, type) => {
    e.preventDefault()
    setIsDragging(true)
    setDragTask(task)
    setDragType(type)
    setDragStartX(e.clientX)
    setDragStartDate(type === 'resize-end' ? task.end : task.start)
  }

  return (
    <div className="gantt" ref={ganttRef}>
      <div className="timeline-header">
        <div className="timeline-labels">
          {timelineHeaders.map((date, i) => (
            <div key={date} className="timeline-label" style={{ width: `${dayWidth}px` }}>
              {formatDate(date)}
            </div>
          ))}
        </div>
      </div>
      <div className="gantt-tasks">
        {tasks.map(task => {
          const offset = daysBetween(minDate, task.start)
          const length = Math.max(1, daysBetween(task.start, task.end) + 1)
          return (
            <div className="gantt-row" key={task.id}>
              <div 
                className={`gantt-bar ${isDragging && dragTask?.id === task.id ? 'dragging' : ''} ${selectedTaskId === task.id ? 'selected' : ''}`}
                style={{ 
                  marginLeft: `${offset * dayWidth}px`, 
                  width: `${length * dayWidth}px` 
                }}
                title={`${task.title} (${task.start} → ${task.end})`}
                onClick={() => onSelectTask(task.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectTask(task.id)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Task ${task.title} from ${task.start} to ${task.end}`}
              >
                <div 
                  className="resize-handle resize-start"
                  onMouseDown={(e) => handleMouseDown(e, task, 'resize-start')}
                  title="Drag to change start date"
                />
                <div 
                  className="task-content"
                  onMouseDown={(e) => handleMouseDown(e, task, 'move')}
                  title="Drag to move task"
                >
                  {task.title}
                </div>
                <div 
                  className="resize-handle resize-end"
                  onMouseDown={(e) => handleMouseDown(e, task, 'resize-end')}
                  title="Drag to change end date"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}