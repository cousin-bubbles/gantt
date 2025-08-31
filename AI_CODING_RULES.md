# AI Coding Best Practices and Rules

*Version 1.0 - Simple Gantt Team*

This document establishes AI coding standards for responsible development, code quality, and consistency across all contributors.

## Core Principles

### Responsible AI Development
- **Transparency**: AI-assisted code must be understandable and well-documented
- **Fairness**: Avoid bias or discriminatory patterns
- **Privacy**: Protect user data and maintain local-only storage commitment
- **Safety**: Thoroughly test AI-assisted features before deployment

### Code Quality Standards

**Simplicity First (SF)**: Choose the simplest viable solution; complex patterns require justification  
**Readability Priority (RP)**: Write immediately understandable code with clear naming  
**Dependency Minimalism (DM)**: No new libraries without explicit justification  
**Industry Standards (ISA)**: Follow React, JavaScript, and accessibility conventions

### Documentation Standards

**Strategic Documentation (SD)**: Comment complex logic only; avoid documenting the obvious  
**Test-Driven Thinking (TDT)**: Design testable code with appropriate error handling

## Workflow Standards

### Development Process
**Atomic Changes (AC)**: Small, self-contained commits representing single logical changes  
**Preserve Existing Code (PEC)**: Never overwrite functional code unless explicitly instructed  
**Transparent Reasoning (TR)**: Document architectural decisions and AI-assisted logic

### Commit Discipline
Use conventional format:
```
type(scope): concise description

[optional details]
[requirement references]
```
Types: feat, fix, docs, style, refactor, perf, test, chore

## Security & Quality

### Data Protection
- **Input Validation (IV)**: Validate all external data
- **Secure Coding**: Follow OWASP guidelines
- **Privacy-Conscious AI**: Use tools that respect data privacy
- **Code Review**: All AI-generated code requires human review

### Quality Guarantees
**DRY Principle**: No duplicate code; reuse existing functionality  
**Clean Architecture (CA)**: Logical structure with separated concerns  
**Error Handling (REH)**: Appropriate error handling for all edge cases  
**Code Smell Detection (CSD)**: Identify and refactor functions >30 lines, files >300 lines, nested conditionals >2 levels

## Implementation

### Getting Started
1. Review this document before AI-assisted development
2. Reference rules in commits using abbreviations: [SF], [RP], [DM], [AC], [TR], [REH]
3. Include rule compliance in PR descriptions
4. Ask questions for unclear rules or conflicts

### Continuous Improvement
- Suggest rule improvements through the issue process
- Share AI development learnings with the team
- Review rules quarterly for updates

---

*These rules complement [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/requirements.md](docs/requirements.md). For questions, use our [requirement template](.github/ISSUE_TEMPLATE/requirement.md).*