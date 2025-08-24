# Simple Gantt — GitHub Copilot Instructions

Simple Gantt is a lean, browser-first Gantt chart application built with React + Vite for personal and small-team project planning. The MVP emphasizes clarity, fast interactions, and local persistence.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Build (VALIDATED COMMANDS)
- Install dependencies: `npm install` -- completes in ~7 seconds
- Build application: `npm run build` -- completes in ~1 second. NEVER CANCEL builds (they are very fast).
- Development server: `npm run dev` -- starts in ~200ms on http://localhost:5173
- Preview built app: `npm run preview` -- serves on http://localhost:4173

### Required Environment
- Node.js v20+ (tested with v20.19.4)
- npm v10+ (tested with v10.8.2)
- No additional system dependencies required

### No Testing or Linting Infrastructure
- **CRITICAL**: This repository has NO test framework configured
- **CRITICAL**: This repository has NO linting tools (ESLint, Prettier) configured
- Do NOT attempt to run `npm test` or `npm run lint` - these scripts do not exist
- When making changes, rely on manual browser testing only

## Manual Validation Requirements

**ALWAYS manually test changes by running complete user scenarios in the browser.** Simply starting/stopping the application is NOT sufficient.

### Essential Test Scenario (ALWAYS perform after changes)
1. Start development server: `npm run dev`
2. Open http://localhost:5173 in browser
3. Validate MVP acceptance criteria:
   - Create 3 tasks using "Add Task" button
   - Edit task titles to meaningful names (e.g., "Project Planning", "Development Phase", "Testing")
   - Modify start/end dates using date inputs
   - Verify Gantt timeline renders tasks as blue bars positioned correctly
   - Test "Reset" button clears all data
   - Verify localStorage persistence (data saves during session but may not persist across browser restarts in some testing environments)
4. Take screenshot to document working functionality

### Build Validation (ALWAYS run before committing)
- `npm run build` -- must succeed in under 2 seconds
- `npm run preview` -- verify built application works correctly
- Test same manual scenarios on preview build

## Key Components and Structure

### Repository Layout
```
/home/runner/work/gantt/gantt/
├── README.md           # Basic quickstart instructions
├── docs/roadmap.md     # Comprehensive project roadmap and requirements
├── package.json        # Dependencies: React 18, Vite 5
├── index.html          # Entry point
├── src/
│   ├── main.jsx        # React application bootstrap
│   ├── App.jsx         # Main application component with useReducer state
│   ├── styles.css      # Application styling
│   └── components/
│       └── Gantt.jsx   # Gantt timeline renderer component
├── public/             # Static assets
└── dist/              # Build output (created by npm run build)
```

### Core Data Model
```javascript
// Project structure in localStorage
{
  id: "project-1",
  name: "Example Project", 
  tasks: [
    {
      id: "task-1234567890",
      title: "Task Name",
      start: "2025-08-24",    // ISO date string
      end: "2025-08-30",      // ISO date string
      percentComplete: 0      // Optional
    }
  ]
}
```

### State Management
- Uses React `useReducer` for state management in `src/App.jsx`
- Actions: `load`, `add-task`, `update-task`, `delete-task`
- Automatic localStorage persistence via `useEffect`
- Storage key: `'simple-gantt:project'`

## Development Patterns

### When Making Changes
1. **ALWAYS run manual test scenario** described above
2. Focus on MVP deliverables only (see docs/roadmap.md)
3. Maintain simple data model - avoid complex state additions
4. Test both development (`npm run dev`) and production (`npm run preview`) builds
5. Verify localStorage persistence works correctly

### Common Maintenance Tasks
- **Add new task fields**: Update reducer in `src/App.jsx` and form inputs
- **Modify Gantt rendering**: Edit `src/components/Gantt.jsx` 
- **Style changes**: Edit `src/styles.css`
- **Add new features**: Follow MVP -> Post-MVP priority from docs/roadmap.md

### Performance Considerations
- Gantt rendering uses simple CSS positioning (12px per day)
- No virtualization implemented - performance may degrade with 50+ tasks
- LocalStorage has browser limits (~5-10MB typically)

## Build Timing and Performance

### Measured Performance (Set timeouts accordingly)
- `npm install`: ~7 seconds - set timeout to 30 seconds minimum
- `npm run build`: ~1 second - set timeout to 10 seconds minimum  
- `npm run dev` startup: ~200ms - set timeout to 5 seconds minimum
- `npm run preview` startup: ~200ms - set timeout to 5 seconds minimum

**NEVER CANCEL these commands** - they complete very quickly in this codebase.

## Technology Stack Details

### Dependencies (package.json)
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

### Vite Configuration
- Uses default Vite configuration (no custom vite.config.js)
- Serves on localhost:5173 (dev) and localhost:4173 (preview)
- Hot module replacement enabled in development
- Builds to `dist/` directory

## Troubleshooting

### Common Issues
- **Port conflicts**: If localhost:5173 busy, Vite will auto-increment port
- **Build failures**: Usually import/syntax errors - check browser console
- **localStorage not persisting**: Check browser privacy settings
- **Gantt not rendering**: Verify tasks have valid start/end dates

### Known Limitations
- No real-time collaboration (by design)
- No import functionality (disabled per requirements)
- Basic date validation only
- No keyboard shortcuts implemented yet (Post-MVP feature)

## Quick Reference Commands
```bash
# Fresh start
npm install
npm run dev

# Validate changes  
npm run build
npm run preview

# View documentation
cat README.md
cat docs/roadmap.md
```

**Remember**: Always test manually in browser after making any changes. The application has no automated tests, so manual validation is critical for ensuring functionality works correctly.