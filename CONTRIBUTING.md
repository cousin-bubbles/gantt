# Contributing to Simple Gantt

Thank you for your interest in contributing to Simple Gantt! This document provides guidelines and information for contributors.

## Getting Started

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/gantt.git
   cd gantt
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Verify Setup**
   - Open http://localhost:5173 in your browser
   - Ensure the application loads and basic functionality works

## Development Workflow

### Creating Issues

We use structured requirement templates for consistency:

1. **Use the Requirement Template**: Create issues using `.github/ISSUE_TEMPLATE/requirement.md`
2. **Descriptive Titles**: Use clear, descriptive titles focused on the functionality or problem
3. **Apply Labels**: Use our [labeling scheme](docs/requirements.md#labeling-scheme)
4. **Link Dependencies**: Reference related requirements and blocking issues

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/descriptive-name
   ```

2. **Make Changes**
   - Follow existing code patterns and conventions
   - Write clear, focused commits
   - Reference relevant requirement IDs in commit messages when applicable

3. **Update Documentation**
   - Update relevant documentation files
   - Add or update tests if applicable
   - Update requirement status in `docs/requirements.md` if major milestones are reached

4. **Submit Pull Request**
   - Use descriptive PR title focused on the changes made
   - Link to related issues using "Closes #issue-number"
   - Reference relevant requirement IDs in PR description when applicable
   - Ensure CI checks pass
   - Request review from maintainers

## Code Standards

### AI Coding Best Practices

All contributors must follow the documented AI coding best practices outlined in [AI_CODING_RULES.md](AI_CODING_RULES.md). Key requirements include:

- **Responsible AI Development**: Ensure transparency, fairness, and privacy in all AI-assisted development
- **Code Quality**: Follow simplicity-first approach with clear, readable code
- **Documentation**: Document complex logic and AI-assisted decisions
- **Security**: Protect user data and follow secure coding practices
- **Review Process**: All AI-assisted code requires peer review

### React/JavaScript Guidelines

- Use modern React patterns (hooks, functional components)
- Follow consistent naming conventions (camelCase for variables, PascalCase for components)
- Write self-documenting code with clear variable and function names
- Use ESLint configurations if available

### File Organization

- Keep components modular and focused on single responsibilities
- Place reusable components in appropriate directories
- Follow existing project structure patterns

### Commit Messages

Use clear, descriptive commit messages:
```
feat: Add task creation functionality

- Implement add task button and form handling
- Update task list to display new tasks
- Add localStorage persistence for new tasks
- Relates to REQ-001 task management requirements
```

## Documentation Standards

### Requirements Documentation

When contributing requirements or design changes:

- Follow the structure in `docs/requirements.md`
- Use RFC 2119 terminology (SHALL, SHOULD, MAY)
- Include clear acceptance criteria
- Update requirement status in docs/requirements.md when implementing features

### Code Documentation

- Write clear inline comments for complex logic
- Document component props and expected data structures
- Update README.md if adding new dependencies or changing setup

## Testing

### Running Tests

```bash
# Run existing tests (when available)
npm test

# Build verification
npm run build
```

### Writing Tests

- Write tests for new functionality when test infrastructure exists
- Focus on critical user paths and edge cases
- Reference relevant requirement IDs in test descriptions for traceability when applicable

## Review Process

### Code Review Guidelines

- **Maintainability**: Code should be easy to understand and modify
- **Functionality**: Changes should work as intended and not break existing features
- **Documentation**: Updates should include relevant documentation changes
- **Consistency**: Follow established patterns and conventions
- **AI Coding Compliance**: Verify adherence to [AI_CODING_RULES.md](AI_CODING_RULES.md) for AI-assisted development

### Approval Process

1. All PRs require review from project maintainers
2. Address feedback promptly and clearly
3. Update documentation and tests as requested
4. Ensure all CI checks pass before merge

## Issue Labeling

Use our comprehensive labeling scheme documented in [requirements.md](docs/requirements.md#labeling-scheme):

- **Level**: `level:story`, `level:epic`, `level:goal`
- **Type**: `req:type:functional`, `req:type:non-functional`
- **Priority**: `priority:P1`, `priority:P2`, `priority:P3`
- **Status**: `status:ready`, `status:in-progress`, `status:testing`, etc.
- **Domain**: `domain:ui`, `domain:data`, `domain:timeline`

## Questions and Support

- **Questions**: Open a discussion or issue for clarification
- **Bugs**: Use the issue template with detailed reproduction steps
- **Feature Requests**: Use the requirement template with clear user stories

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:

- Be respectful and constructive in all interactions
- Focus on what is best for the community and project
- Show empathy towards other community members
- Accept feedback gracefully and provide feedback constructively

## Recognition

Contributors will be recognized in:
- Git commit history
- Release notes for significant contributions
- Project documentation where appropriate

Thank you for contributing to Simple Gantt! Your efforts help make this project better for everyone.