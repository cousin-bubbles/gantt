# Simple Gantt

A lightweight, browser-based Gantt chart application for project planning and timeline visualization.

## Overview

Simple Gantt provides an efficient way to visualize project timelines without enterprise tool complexity. Built with React 18+ and Vite, it focuses on local data storage and requires no server infrastructure.

## Quick Start

### Prerequisites
- Node.js 16+
- Modern web browser with localStorage support

### Getting Started
```bash
# Clone and install
git clone https://github.com/cousin-bubbles/gantt.git
cd gantt
npm install

# Development
npm run dev          # Start dev server at http://localhost:5173/

# Production
npm run build        # Build optimized bundle
npm run preview      # Preview built app at http://localhost:4173/
```

## Features

- **Task Management**: Create, edit, and delete tasks with dates and completion tracking
- **Timeline Visualization**: Interactive Gantt chart with real-time updates
- **Local Persistence**: Automatic localStorage saving (no server required)
- **Responsive Design**: Desktop and mobile compatible
- **Fast Performance**: ~1 second builds, instant dev server startup

## Architecture

**Technology Stack**: React 18+ • Vite • localStorage • CSS  
**Browser Support**: Chrome 60+ • Firefox 55+ • Safari 12+ • Edge 79+

**Key Files**:
- `src/App.jsx` - Main application with task management
- `src/components/Gantt.jsx` - Timeline visualization component
- `docs/requirements.md` - Detailed specifications
- `docs/roadmap.md` - Project roadmap and milestones

## Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - Development workflow and standards
- **[Requirements](docs/requirements.md)** - Functional and non-functional requirements  
- **[Roadmap](docs/roadmap.md)** - Project milestones and future features
- **[AI Coding Rules](AI_CODING_RULES.md)** - AI development best practices

## Contributing

We use structured requirement templates for consistency. Please:

1. **Open issues** using our [requirement template](.github/ISSUE_TEMPLATE/requirement.md)
2. **Follow guidelines** in [CONTRIBUTING.md](CONTRIBUTING.md)
3. **Reference requirements** from [docs/requirements.md](docs/requirements.md) when applicable

## License

Licensed under the MIT License - see [LICENSE](LICENSE) for details.
