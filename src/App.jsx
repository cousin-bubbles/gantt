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

  function addTask() {
    const id = 'task-' + Date.now()
    const today = new Date().toISOString().slice(0,10)
    const task = { id, title: 'New Task', start: today, end: today, percentComplete: 0 }
    dispatch({ type: 'add-task', task })
  }

  return (
    <div className="app">
      <header>
        <h1>Simple Gantt — MVP</h1>
        <div className="controls">
          <button onClick={addTask}>Add Task</button>
          <button onClick={() => { localStorage.removeItem(STORAGE_KEY); dispatch({ type: 'load', project: initialState.project }) }}>Reset</button>
        </div>
      </header>

      <main>
        <aside className="sidebar">
          <h2>Tasks</h2>
          <ul>
            {state.project.tasks.map(task => (
              <li key={task.id}>
                <input value={task.title} onChange={e => dispatch({ type: 'update-task', task: { ...task, title: e.target.value } })} />
                <div className="dates">
                  <input type="date" value={task.start} onChange={e => dispatch({ type: 'update-task', task: { ...task, start: e.target.value } })} />
                  <input type="date" value={task.end} onChange={e => dispatch({ type: 'update-task', task: { ...task, end: e.target.value } })} />
                  <button onClick={() => dispatch({ type: 'delete-task', id: task.id })}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <section className="gantt-area">
          <Gantt tasks={state.project.tasks} onUpdate={task => dispatch({ type: 'update-task', task })} />
        </section>
      </main>
    </div>
  )
}

export default App
