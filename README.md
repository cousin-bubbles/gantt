# Simple Gantt — MVP

A minimal, web-based Gantt chart application for personal and small team project management.

## Features ✅

- **Task Management**: Create, edit, and delete tasks with title, start/end dates
- **Interactive Timeline**: Drag to move tasks and resize to adjust dates
- **Data Persistence**: Automatic save to browser localStorage
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Keyboard Accessible**: Tab navigation, keyboard shortcuts, screen reader support

## Quick Start

1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173

## Usage

- **Add Task**: Click "Add Task" or press Ctrl+N
- **Edit Task**: Click on task names and dates to edit
- **Move Task**: Drag the middle of a task bar to move it
- **Resize Task**: Drag the left/right edges to change start/end dates
- **Delete Task**: Click "Delete" button or select task and press Delete key
- **Reset**: Clear all data with "Reset" button

## Keyboard Shortcuts

- `Ctrl+N` - Add new task
- `Delete` - Delete selected task
- `Escape` - Clear selection
- `Tab` - Navigate between elements
- `Enter/Space` - Select tasks

## MVP Acceptance Criteria ✅

- ✅ Users can create a 3-task project
- ✅ Adjust dates via UI (inputs and drag interactions)
- ✅ Reload page and see changes preserved
- ✅ Responsive UI for desktop and mobile
- ✅ Basic keyboard navigation and accessibility

## Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with CSS custom properties
- **State Management**: React useReducer
- **Persistence**: Browser localStorage

## Project Structure

```
src/
├── App.jsx           # Main application component
├── main.jsx          # Application entry point
├── styles.css        # Global styles and responsive design
└── components/
    └── Gantt.jsx     # Interactive Gantt timeline component
```

See [docs/roadmap.md](docs/roadmap.md) for the full project roadmap and future features.
