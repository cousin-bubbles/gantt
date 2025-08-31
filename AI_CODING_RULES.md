# AI Coding Best Practices and Rules

Version: 1.0  
Last updated: 2025-08-31  
Author: Simple Gantt Team

## Overview

This document establishes AI coding best practices and rules for the Simple Gantt project to ensure responsible AI development, code quality, consistency, and ethical AI practices across all contributors.

## Core Principles

### 1. Responsible AI Development
- **Model Transparency**: All AI-assisted code must be transparent in its purpose and functionality
- **Fairness**: AI assistance should not introduce bias or discriminatory patterns
- **Explainability**: AI-generated code should be understandable and well-documented
- **Data Privacy**: Protect user data and ensure AI tools do not compromise privacy
- **Safe Deployment**: Ensure AI-assisted features are thoroughly tested before deployment

### 2. Code Quality Standards

#### Simplicity First (SF)
- Always choose the simplest viable solution
- Complex patterns or architectures require explicit justification
- Prefer readable code over clever optimizations

#### Readability Priority (RP) 
- Code must be immediately understandable by both humans and AI during future modifications
- Use clear, descriptive variable and function names
- Follow consistent naming conventions

#### Dependency Minimalism (DM)
- No new libraries or frameworks without explicit request or compelling justification
- Minimize external dependencies to reduce security risks and maintenance burden

#### Industry Standards Adherence (ISA)
- Follow established conventions for React, JavaScript, and web development
- Use ESLint and Prettier configurations when available
- Follow accessibility standards (WCAG 2.1 AA)

### 3. Documentation Standards

#### Strategic Documentation (SD)
- Comment only complex logic or critical functions
- Avoid documenting the obvious
- Write new documentation in English
- Keep documentation up-to-date with code changes

#### Test-Driven Thinking (TDT)
- Design all code to be easily testable from inception
- Include unit tests for complex AI-assisted functionality
- Ensure AI-generated code includes appropriate error handling

## Workflow Standards

### 1. Atomic Changes (AC)
- Make small, self-contained modifications to improve traceability and rollback capability
- Each commit should represent a single logical change
- Use feature branches for AI-assisted development

### 2. Commit Discipline (CD)
- Use semantic commit messages with conventional format:
  ```
  type(scope): concise description
  
  [optional body with details]
  
  [optional footer with breaking changes/issue references]
  ```
- Types: feat, fix, docs, style, refactor, perf, test, chore
- Include requirement IDs when applicable (e.g., "feat(ai): implement NFR-011 AI coding rules")

### 3. Transparent Reasoning (TR)
- When using AI assistance, document the reasoning behind architectural decisions
- Reference which coding rules influenced AI-assisted decisions
- Include comments explaining complex AI-generated logic

### 4. Preserve Existing Code (PEC)
- AI tools must not overwrite or break functional code unless explicitly instructed
- Propose changes conservatively to maintain codebase integrity
- Test thoroughly before committing AI-assisted changes

## Security & Privacy Considerations

### 1. Data Protection
- **No Sensitive Data Exposure**: Never include sensitive data in AI training prompts
- **Local Data Only**: Maintain the project's commitment to local-only data storage
- **Input Validation (IV)**: All external data must be validated before processing
- **Secure Coding**: Follow OWASP security guidelines for web applications

### 2. AI Tool Usage
- **Privacy-Conscious AI**: Use AI tools that respect data privacy
- **Code Review**: All AI-generated code must undergo human review
- **Testing**: AI-assisted features require comprehensive testing
- **Audit Trail**: Maintain records of significant AI-assisted changes

## AI-Specific Guidelines

### 1. Responsible AI Integration
- **Bias Prevention**: Actively check for and prevent discriminatory patterns
- **Accessibility**: Ensure AI-assisted features work with assistive technologies
- **User Control**: Users should understand and control AI-assisted features
- **Fallback Options**: Provide non-AI alternatives for critical functionality

### 2. Performance Considerations
- **Resource Management (RM)**: Close connections and free resources appropriately
- **Performance Awareness (PA)**: Consider computational complexity and resource usage
- **Monitoring**: Monitor performance impact of AI-assisted features

### 3. Maintenance and Evolution
- **Version Control**: Track AI-assisted changes through Git commits
- **Documentation Updates**: Update documentation when AI-assisted features change
- **Regular Review**: Periodically review AI-assisted code for improvements
- **Knowledge Transfer**: Ensure team members understand AI-assisted implementations

## Code Quality Guarantees

### 1. DRY Principle (DRY)
- No duplicate code
- Reuse or extend existing functionality
- Create reusable components for common AI-assisted patterns

### 2. Clean Architecture (CA)
- Generate cleanly formatted, logically structured code with consistent patterns
- Separate concerns appropriately
- Follow React component best practices

### 3. Error Handling (REH)
- Integrate appropriate error handling for all edge cases
- Provide meaningful error messages to users
- Handle AI service failures gracefully

### 4. Code Smell Detection (CSD)
Proactively identify and suggest refactoring for:
- Functions exceeding 30 lines
- Files exceeding 300 lines  
- Nested conditionals beyond 2 levels
- Components with more than 5 props without destructuring

## Review and Compliance

### 1. Code Review Process
- All AI-assisted code changes require peer review
- Reviewers should verify compliance with these rules
- Document any exceptions or deviations with justification

### 2. Regular Updates
- Review these rules quarterly or when significant AI developments occur
- Update rules based on team feedback and industry best practices
- Communicate changes to all contributors

### 3. Training and Onboarding
- New contributors must be familiar with these AI coding rules
- Include AI coding practices in onboarding materials
- Provide examples of good AI-assisted development practices

## Implementation Notes

### Getting Started
1. Review this document before beginning AI-assisted development
2. Reference relevant rules in commit messages using abbreviations (e.g., [SF], [DRY])
3. Include AI coding rule compliance in PR descriptions
4. Ask questions if any rule is unclear or conflicts arise

### Rule Application Tracking (RAT)
When applying rules, tag with the abbreviation in brackets:
- [SF] - Simplicity First
- [RP] - Readability Priority  
- [DM] - Dependency Minimalism
- [AC] - Atomic Changes
- [TR] - Transparent Reasoning
- [REH] - Robust Error Handling

### Continuous Improvement
- Suggest improvements to these rules through the normal issue process
- Share learnings from AI-assisted development with the team
- Contribute to the evolution of responsible AI practices

---

*These AI coding rules are adapted from industry best practices and are designed to complement the existing development standards outlined in [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/requirements.md](docs/requirements.md).*

*For questions about AI coding practices, please open an issue using the [requirement template](.github/ISSUE_TEMPLATE/requirement.md).*