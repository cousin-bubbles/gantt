# Simple Gantt - GitHub Copilot Instructions

**ALWAYS follow these instructions first** and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

## Project Overview

Simple Gantt is a lightweight, browser-based Gantt chart application built with React 18+ and Vite. It provides task management and timeline visualization with local storage persistence, requiring no server infrastructure.

## Bootstrap & Development Setup

### Prerequisites
- Node.js 16+ (currently tested with Node.js 20.19.4)
- Modern web browser with localStorage support

### Installation & Build Commands
**Run these commands in sequence for fresh setup:**

```bash
# Install dependencies - takes ~2 seconds
npm install

# Start development server - starts in ~172ms
npm run dev
# Serves on http://localhost:5173/

# Build for production - takes ~1 second. NEVER CANCEL.
npm run build
# Creates dist/ folder with optimized assets

# Preview built application
npm run preview
# Serves built app on http://localhost:4173/
```

**CRITICAL TIMING:** All build commands are very fast (1-2 seconds). No extended timeouts needed.

## Manual Validation Requirements

**ALWAYS perform these validation steps after making changes:**

### 1. Basic Functionality Test
1. Run `npm run dev`
2. Open http://localhost:5173/ in browser
3. Click "Add Task" button twice
4. Edit first task title to "Task 1 - Planning"
5. Edit second task title to "Task 2 - Development" 
6. Change second task end date to 5 days later
7. Verify gantt chart shows both tasks with correct timeline positioning
8. Click "Reset" button and verify tasks are cleared

**NOTE**: localStorage persistence works differently in dev vs production:
- Dev server: localStorage may not persist between page refreshes
- Production build: localStorage works correctly and persists data

### 2. Build Validation (localStorage Testing)
```bash
# ALWAYS test production build for localStorage functionality
npm run build && npm run preview
# Access http://localhost:4173/
# Repeat functionality test above
# Verify tasks persist after page refresh (localStorage working correctly)
# Test Reset button clears all data
```

### 3. Code Standards Validation
- Follow React modern patterns (hooks, functional components)
- Use existing file organization patterns
- Reference AI_CODING_RULES.md for coding standards
- No new dependencies without justification

## Repository Structure & Key Files

```
├── .github/
│   └── ISSUE_TEMPLATE/requirement.md    # Structured requirement template
├── src/
│   ├── App.jsx                          # Main application with task management
│   ├── components/Gantt.jsx             # Gantt chart visualization component
│   ├── main.jsx                         # React application entry point
│   └── styles.css                       # Global styles and layout
├── docs/
│   ├── requirements.md                  # Detailed project requirements
│   └── roadmap.md                       # Project roadmap and technical considerations
├── AI_CODING_RULES.md                   # AI coding best practices (MUST follow)
├── CONTRIBUTING.md                      # Contribution guidelines
├── README.md                            # Project documentation
├── package.json                         # Dependencies and scripts
├── index.html                           # HTML template
└── dist/                                # Build output (created by npm run build)
```

## Core Development Patterns

### Task Management (src/App.jsx)
- Uses useReducer for state management
- localStorage integration for persistence
- Task structure: `{ id, title, start, end, percentComplete }`
- Actions: add-task, update-task, delete-task, load

### Gantt Visualization (src/components/Gantt.jsx) 
- Simple SVG-free implementation using CSS positioning
- Calculates timeline based on earliest task start date
- 12px per day scaling for visual representation

### State Persistence
- Automatic save to localStorage on state changes
- Storage key: 'simple-gantt:project'
- JSON serialization of project data

## Common Development Tasks

### Adding New Features
1. ALWAYS check requirements.md for related requirement IDs
2. Follow existing component patterns in src/components/
3. Update traceability table in docs/requirements.md
4. Test with manual validation scenarios above

### Modifying Task Structure
- Update reducer in App.jsx
- Modify Gantt.jsx if visualization changes needed
- Test localStorage compatibility

### Styling Changes
- Edit src/styles.css for global styles
- Follow existing CSS patterns (flexbox layout)
- Test responsive design at 320px, 768px, 1024px+ breakpoints

## Testing & Quality Assurance

### No Formal Test Framework
- Repository has no Jest/Vitest configuration
- Rely on manual validation scenarios above
- Browser testing is required for UI changes

### Code Quality
- No ESLint/Prettier configuration present
- Follow patterns established in existing code
- Reference AI_CODING_RULES.md for standards

### Browser Compatibility
- Target: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- Test localStorage functionality across browsers
- Verify responsive design

## Important Development Notes

### Technology Constraints
- **Local Storage Only**: No server-side data persistence
- **No External APIs**: MVP requires no network dependencies  
- **Minimal Dependencies**: Avoid adding new npm packages
- **Static Deployment**: Builds for static file hosting

### Performance Characteristics
- Very fast build times (~1 second)
- Lightweight bundle size (~144KB gzipped)
- Instant dev server startup
- No performance optimization needed for MVP

### AI Coding Requirements
- **MUST** follow AI_CODING_RULES.md
- All AI-assisted code requires human review
- Maintain simplicity-first approach
- Document complex logic clearly

## Quick Reference Commands

```bash
# Development workflow
npm install                    # Install dependencies (2 seconds)
npm run dev                   # Start dev server (172ms)
npm run build                 # Production build (1 second)
npm run preview               # Test built app

# Validation workflow  
npm run build && npm run preview   # Full build test
# Manual browser testing required - no automated tests
```

## Frequently Accessed Files

Use these instead of searching to save time:

### package.json
```json
{
  "name": "gantt",
  "version": "0.1.0", 
  "scripts": {
    "dev": "vite",
    "build": "vite build", 
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

### Project Structure Overview
- **Frontend**: React 18+ with modern hooks
- **Build System**: Vite for fast development  
- **Storage**: Browser localStorage only
- **Styling**: Plain CSS with responsive design
- **No backend, no database, no external services**

## Critical Reminders

1. **ALWAYS** run manual validation scenarios after changes
2. **NEVER** add dependencies without explicit justification
3. **ALWAYS** follow existing code patterns and AI_CODING_RULES.md
4. **ALWAYS** test localStorage persistence functionality
5. **ALWAYS** verify responsive design across breakpoints
6. Build times are very fast - no extended timeouts needed
7. No formal testing framework - manual browser testing required

## Success Criteria Reference

A properly functioning implementation should allow a user to:
- Create a 3-task project via the UI
- Adjust task dates and titles
- Reload the page and see changes preserved  
- View correct gantt timeline visualization
- Use the application offline after initial load