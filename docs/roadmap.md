# Simple Gantt — Roadmap

Version: 0.2  
Last updated: 2025-08-24  
Author: Simple Gantt Team

## Conversation excerpt — context
- User requested a new repository and a minimal scaffold for "Simple Gantt".
- Scope and priorities were defined early in the conversation: deliver a minimal, web-based Gantt chart for personal / small-team use; keep the MVP small and focused; add milestones and critical path as optional advanced features.
This document reflects those decisions and translates them into a structured roadmap, milestones, and acceptance criteria.

## Project overview
Simple Gantt is a lean, browser-first Gantt chart application for personal and small-team project planning. The product emphasizes clarity, fast interactions, and local persistence for an uncomplicated setup and reliable offline-friendly usage.

## Goals
- Deliver a working MVP that enables users to plan tasks on a timeline quickly.
- Provide a clean, responsive UI that scales between desktop and mobile.
- Maintain a simple data model so users can export projects without complex migrations.
- Add targeted, high-impact features post-MVP (milestones, critical path) to increase planning value.

## Target audience
Individuals, freelancers, and small teams who prefer a lightweight, no-friction Gantt planning tool without mandatory cloud collaboration.

## Scope
- MVP: Core task and timeline features only, local data persistence.
- Post-MVP: Usability improvements, visual enhancements, export and analytical features (milestones, critical path).
- Explicitly out of scope for MVP: real-time multi-user collaboration, import/notifications, complex enterprise integrations.

---

## MVP (Minimum Viable Product) — Deliverables
1. Task management
   - Create, edit, delete tasks
   - Task fields: title, start date, end date, optional percent-complete, optional category/tag
2. Gantt timeline
   - Visual rendering of tasks on a time axis (day/week/month zoom)
   - Basic move/resize interactions to change start/end dates
3. Persistence
   - Save and load projects to browser localStorage (JSON export)
4. UI / Accessibility
   - Responsive layout for desktop and mobile
   - Keyboard-accessible primary controls and basic screen reader semantics
5. Project file
   - README, docs/roadmap.md, basic scaffold (public/, src/, docs/)

Acceptance criteria for MVP
- A user can create a 3-task project, adjust dates via the UI, reload the page, and see the changes preserved.
- The UI renders correctly at common desktop and mobile breakpoints.
- Basic keyboard navigation exists for task selection and editing.

---

## Post-MVP / Optional features (prioritized)
Priority 1
- Milestones: first-class milestone entities that render as markers on the timeline.
- Drag-and-drop: improved interactions for moving and reordering tasks.
Priority 2
- Critical Path: automatic calculation and visual highlighting of the critical path.
- Color-coding & categories: visual grouping for tasks.
Priority 3
- Export to CSV and a printable/PDF-friendly view (no import for now).
- Task progress indicators and percent-complete bulk editing.
Lower priority / future
- Zooming/panning timeline improvements, saved views, and advanced scheduling heuristics.

---

## Milestones (suggested plan)
Milestone 1 — MVP Launch
- Scope: All MVP deliverables above.
- Deliverables: Working app, example project, basic tests, README and docs.
- Success criteria: Functional local persistence + basic timeline editing; usability smoke test passed by at least one tester.

Milestone 2 — UX Polish & Interactions
- Scope: Drag-and-drop, keyboard shortcuts, visual polish.
- Deliverables: Improved task manipulation, color theming, accessibility refinements.

Milestone 3 — Data Portability & Print
- Scope: CSV export and printable/PDF-friendly view.
- Deliverables: Export feature, print stylesheet, sample export validation.

Milestone 4 — Scheduling Intelligence
- Scope: Milestones and Critical Path.
- Deliverables: Milestone object support, critical-path algorithm, visual highlighting.

(Assign dates and owners per your team cadence.)

---

## Technical considerations & recommendations
- Tech stack (recommended): React + Vite for quick iteration; render timeline with a lightweight Gantt/d3 helper or a simple canvas/SVG implementation to maintain performance.
- State management: Start with React local state + useReducer; adopt Zustand/Redux only if complexity increases.
- Data model (MVP): tasks { id, title, start, end, percentComplete?, tags? }, milestones { id, date, title, taskRef? }, project { id, name, tasks[], milestones[] }.
- Persistence: localStorage for MVP; provide JSON export to enable manual backups.
- Testing: unit tests for core date calculations and integration tests for save/load workflow.

---

## Risks & mitigations
- Risk: Gantt rendering can be slow with many tasks.
  - Mitigation: Implement virtualization and limit initial render to sensible defaults; document performance bounds.
- Risk: Scope creep via advanced scheduling features.
  - Mitigation: Gate advanced features behind explicit milestones and only implement after MVP validation.
- Risk: Confusing UX for date manipulation on mobile.
  - Mitigation: Provide alternative inputs (date pickers) and ensure large touch targets.

---

## Out of scope (for MVP)
- Real-time multi-user collaboration
- Import of external project files (disabled by request)
- Notifications or scheduling alerts
- Enterprise integrations (calendars, PM systems)

---

## Next steps
1. Confirm milestone dates and owners.
2. Finalize the MVP acceptance criteria and create issues for each deliverable using the [requirement template](../.github/ISSUE_TEMPLATE/requirement.md).
3. Scaffold and implement MVP components (task model, Gantt renderer, persistence).
4. Run a short usability pass with representative users and iterate.

For detailed contribution guidelines, see [CONTRIBUTING.md](../CONTRIBUTING.md).

## Change log
- v0.1 — Initial informal roadmap created from conversation notes.
- v0.2 — Professionalized structure, added goals, acceptance criteria, risks, and technical recommendations.
