# Simple Gantt — MVP

A lightweight, browser-based Gantt chart application for personal and small-team project planning.

## Project Overview

Simple Gantt is designed to provide a clean, efficient way to visualize project timelines without the complexity of enterprise tools. Built with React and focusing on local data storage, it enables quick project planning without requiring server infrastructure or cloud dependencies.

## Quick Start

### Prerequisites
- Node.js 16+ 
- Modern web browser with localStorage support

### Installation
```bash
# Clone the repository
git clone https://github.com/cousin-bubbles/gantt.git
cd gantt

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## Features

### Current MVP Features
- **Task Management**: Create, edit, and delete project tasks
- **Timeline Visualization**: Visual Gantt chart with task positioning
- **Local Persistence**: Automatic saving to browser localStorage
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Changes reflect immediately across views

### Core Components
- React 18+ with Vite build system
- Task model with title, start date, end date, and completion percentage
- Browser-based local storage (no server required)
- Basic Gantt timeline renderer

## Documentation

- **[Requirements](docs/requirements.md)** - Detailed functional and non-functional requirements
- **[Roadmap](docs/roadmap.md)** - Project roadmap and future planning
- **[Contributing](CONTRIBUTING.md)** - Guidelines for contributors

## Architecture

### Technology Stack
- **Frontend**: React 18+ with modern hooks
- **Build System**: Vite for fast development and optimized builds
- **Storage**: Browser localStorage for data persistence
- **Styling**: CSS with responsive design principles

### Project Structure
```
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── styles.css       # Global styles
├── docs/                # Project documentation
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Browser Support

- Chrome 60+
- Firefox 55+ 
- Safari 12+
- Edge 79+

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support & Contributing

For questions, feature requests, or bug reports, please open an issue using our [requirement template](.github/ISSUE_TEMPLATE/requirement.md).

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.
