# Contributing to Simple Gantt

Thank you for contributing! This guide covers our development workflow and standards.

## Quick Setup

```bash
# Fork, clone, and setup
git clone https://github.com/your-username/gantt.git
cd gantt
npm install
npm run dev        # Verify at http://localhost:5173
```

## Workflow

### 1. Creating Issues
- Use the [requirement template](.github/ISSUE_TEMPLATE/requirement.md)
- Apply appropriate [labels](docs/requirements.md#labeling-scheme)
- Reference related requirements from [docs/requirements.md](docs/requirements.md)

### 2. Development Process
```bash
git checkout -b feature/descriptive-name
# Make changes following code standards below
# Write clear commit messages
git commit -m "feat: add task deletion functionality"
```

### 3. Pull Requests
- Use descriptive titles focused on changes made
- Link related issues: "Closes #issue-number"
- Update documentation and requirement status if applicable
- Request maintainer review

## Code Standards

### AI Development
Follow [AI_CODING_RULES.md](AI_CODING_RULES.md) for all AI-assisted development:
- Responsible development practices
- Code quality and readability standards  
- Documentation requirements
- Security and review processes

### React/JavaScript
- Use modern React patterns (hooks, functional components)
- Follow camelCase/PascalCase naming conventions
- Write self-documenting code with clear names
- Keep components modular and focused

### Commit Messages
Use conventional format:
```
type(scope): concise description

Optional detailed explanation
Relates to REQ-XXX (when applicable)
```

## Documentation

### Requirements
- Follow structure in [docs/requirements.md](docs/requirements.md)
- Use RFC 2119 terminology (SHALL, SHOULD, MAY)
- Include clear acceptance criteria
- Update requirement status when implementing features

### Code Comments
- Comment complex logic only
- Document component props and data structures
- Update README.md for setup changes

## Testing & Quality

```bash
npm run build     # Verify builds successfully
npm run preview   # Test production build
```

Manual testing required - no formal test framework currently available.

## Labels & Support

Use our [labeling scheme](docs/requirements.md#labeling-scheme):
- **Level**: `level:story`, `level:epic`, `level:goal`
- **Type**: `req:type:functional`, `req:type:non-functional`
- **Priority**: `priority:P1`, `priority:P2`, `priority:P3`
- **Domain**: `domain:ui`, `domain:data`, `domain:timeline`

**Need Help?** Open an issue using our requirement template for questions, bugs, or feature requests.