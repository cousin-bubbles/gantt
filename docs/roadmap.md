# Simple Gantt — Roadmap

*Version 0.2 - Simple Gantt Team*

## Project Overview

Simple Gantt is a lightweight, browser-based Gantt chart application for personal and small-team project planning. Emphasizes clarity, fast interactions, and local persistence for reliable offline usage.

**Target Audience**: Individuals, freelancers, and small teams seeking a lightweight Gantt tool without mandatory cloud collaboration

## Goals & Scope

### Core Goals
- Working MVP enabling quick task timeline planning
- Clean, responsive UI scaling from desktop to mobile
- Simple data model supporting easy project export
- Targeted post-MVP features for enhanced planning value

### MVP Scope
**In Scope**: Task management, timeline visualization, local persistence, responsive UI  
**Out of Scope**: Real-time collaboration, external file import, notifications, enterprise integrations

## MVP Deliverables

### 1. Task Management
- Create, edit, delete tasks with title, dates, and completion percentage
- Task persistence via browser localStorage

### 2. Timeline Visualization  
- Visual Gantt chart with day/week/month zoom levels
- Basic interactions to adjust task start/end dates

### 3. UI & Accessibility
- Responsive layout for desktop and mobile breakpoints
- Keyboard navigation and basic screen reader support

### 4. Technical Foundation
- React + Vite build system
- Local JSON data export capability
- Core documentation and setup

**Success Criteria**: Users can create 3-task projects, adjust dates, reload page with changes preserved, and navigate with keyboard

## Milestones

### Milestone 1 — MVP Launch
**Scope**: All MVP deliverables  
**Success**: Functional persistence + timeline editing with usability validation

### Milestone 2 — UX Polish  
**Scope**: Drag-and-drop, keyboard shortcuts, visual improvements  
**Deliverables**: Enhanced task manipulation and accessibility

### Milestone 3 — Data Portability
**Scope**: CSV export and print-friendly views  
**Deliverables**: Export features and print stylesheets

### Milestone 4 — Scheduling Intelligence
**Scope**: Milestones and critical path analysis  
**Deliverables**: Milestone support and critical path visualization

## Post-MVP Features (Prioritized)

**Priority 1**: Milestones, drag-and-drop interactions  
**Priority 2**: Critical path calculation, color-coding categories  
**Priority 3**: Export to CSV/PDF, progress indicators  
**Future**: Advanced timeline controls, saved views, scheduling algorithms

## Technical Recommendations

**Architecture**: React + Vite, useReducer state management, lightweight SVG/Canvas timeline rendering  
**Data Model**: Tasks {id, title, start, end, percentComplete}, projects with JSON export  
**Performance**: Virtualization for large task lists, sensible rendering defaults

## Risk Mitigation

- **Performance**: Implement virtualization, document performance bounds
- **Scope Creep**: Gate advanced features behind explicit milestones  
- **Mobile UX**: Provide date pickers and large touch targets

## Next Steps

1. Create detailed issues using [requirement template](../.github/ISSUE_TEMPLATE/requirement.md)
2. Implement MVP components following [contribution guidelines](../CONTRIBUTING.md)
3. Conduct usability testing and iterate

*For detailed requirements, see [docs/requirements.md](requirements.md)*
