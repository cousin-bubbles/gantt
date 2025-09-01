---
name: Requirement
about: Create a new functional or non-functional requirement
title: 'Requirement Title'
labels: ['documentation']
assignees: ''
---

## Requirement Information

**Type**: [ ] Functional [ ] Non-Functional  
**Priority**: [ ] P1 (Critical) [ ] P2 (Important) [ ] P3 (Nice to Have)

**Related Requirements**: [Optional - reference requirement IDs from docs/requirements.md]

## Requirement Statement

**The system SHALL** [describe what the system must do] **[under conditions]** **so that** [business value/user benefit].

## User Story (for functional requirements)

**As a** [type of user]  
**I want** [goal/feature]  
**So that** [benefit/value]

## Acceptance Criteria

**Given** [initial context]  
**When** [action/trigger]  
**Then** [expected outcome]

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Non-Functional Criteria (if applicable)

- **Performance**: [measurable requirements]
- **Security**: [security constraints]
- **Accessibility**: [accessibility standards]
- **Usability**: [usability requirements]
- **Other**: [additional aspects]

## Dependencies & Implementation

- **Depends on**: [requirements or features this depends on]
- **Blocks**: [requirements blocked by this one]
- **Implementation Notes**: [technical considerations, constraints, guidance]

## Definition of Done

- [ ] Requirement implemented and tested
- [ ] Documentation updated
- [ ] Code reviewed and merged
- [ ] Requirement status updated in docs/requirements.md

## Additional Context

[Context, mockups, or references that clarify the requirement]

---

**Apply Labels**:
- Level: `level:story`, `level:epic`, `level:goal`
- Type: `req:type:functional`, `req:type:non-functional`
- Priority: `priority:P1`, `priority:P2`, `priority:P3`
- NFR Category: `nfr:performance`, `nfr:security`, `nfr:accessibility`, `nfr:reliability`
- Domain: `domain:ui`, `domain:data`, `domain:timeline`
- Status: `status:ready`