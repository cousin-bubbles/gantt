import React, { useEffect, useReducer } from 'react'
import Gantt from './components/Gantt'

const STORAGE_KEY = 'simple-gantt:project'

const initialState = {
  project: {
    id: 'project-1',
    name: 'Example Project',
    tasks: []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'load':
      return { ...state, project: action.project }
    case 'add-task': {
      const task = action.task
      return { ...state, project: { ...state.project, tasks: [...state.project.tasks, task] } }
    }
    case 'update-task': {
      const tasks = state.project.tasks.map(t => t.id === action.task.id ? action.task : t)
      return { ...state, project: { ...state.project, tasks } }
    }
    case 'delete-task': {
      const tasks = state.project.tasks.filter(t => t.id !== action.id)
      return { ...state, project: { ...state.project, tasks } }
    }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [selectedTaskId, setSelectedTaskId] = React.useState(null)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const project = JSON.parse(raw)
        dispatch({ type: 'load', project })
      } catch (e) {
        console.error('Failed to parse project from localStorage', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.project))
  }, [state.project])

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Handle keyboard shortcuts
      if (e.key === 'n' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        addTask()
      } else if (e.key === 'Delete' && selectedTaskId) {
        e.preventDefault()
        dispatch({ type: 'delete-task', id: selectedTaskId })
        setSelectedTaskId(null)
      } else if (e.key === 'Escape') {
        setSelectedTaskId(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedTaskId])

  function addTask() {
    const id = 'task-' + Date.now()
    const today = new Date().toISOString().slice(0,10)
    const task = { id, title: 'New Task', start: today, end: today, percentComplete: 0 }
    dispatch({ type: 'add-task', task })
    setSelectedTaskId(id)
  }

  return (
    <div className="app">
      <header>
        <h1>Simple Gantt — MVP</h1>
        <div className="controls">
          <button 
            onClick={addTask}
            title="Add new task (Ctrl+N)"
          >
            Add Task
          </button>
          <button 
            onClick={() => { 
              localStorage.removeItem(STORAGE_KEY)
              dispatch({ type: 'load', project: initialState.project })
              setSelectedTaskId(null)
            }}
            title="Reset all data"
          >
            Reset
          </button>
        </div>
      </header>

      <main>
        <aside className="sidebar">
          <h2>Tasks</h2>
          <ul>
            {state.project.tasks.map(task => (
              <li 
                key={task.id}
                className={selectedTaskId === task.id ? 'selected' : ''}
                onClick={() => setSelectedTaskId(task.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedTaskId(task.id)
                  } else if (e.key === 'Delete') {
                    e.preventDefault()
                    dispatch({ type: 'delete-task', id: task.id })
                    setSelectedTaskId(null)
                  }
                }}
                role="button"
                aria-label={`Task: ${task.title}`}
              >
                <input 
                  value={task.title} 
                  onChange={e => dispatch({ type: 'update-task', task: { ...task, title: e.target.value } })}
                  placeholder="Task name"
                  aria-label="Task name"
                />
                <div className="dates">
                  <input 
                    type="date" 
                    value={task.start} 
                    onChange={e => dispatch({ type: 'update-task', task: { ...task, start: e.target.value } })}
                    aria-label="Start date"
                  />
                  <input 
                    type="date" 
                    value={task.end} 
                    onChange={e => dispatch({ type: 'update-task', task: { ...task, end: e.target.value } })}
                    aria-label="End date"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch({ type: 'delete-task', id: task.id })
                      setSelectedTaskId(null)
                    }}
                    title="Delete task (Delete key)"
                    aria-label={`Delete task ${task.title}`}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {state.project.tasks.length === 0 && (
            <p className="empty">No tasks yet. Click "Add Task" to get started!</p>
          )}
        </aside>

        <section className="gantt-area">
          <Gantt 
            tasks={state.project.tasks} 
            onUpdate={task => dispatch({ type: 'update-task', task })}
            selectedTaskId={selectedTaskId}
            onSelectTask={setSelectedTaskId}
          />
        </section>
      </main>
    </div>
  )
}

export default App
