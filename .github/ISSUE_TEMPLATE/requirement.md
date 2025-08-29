---
name: Requirement
about: Create a new functional or non-functional requirement
title: '[REQ/NFR-XXX] Requirement Title'
labels: ['documentation']
assignees: ''
---

## Requirement Information

**Requirement ID**: REQ/NFR-XXX (assign next available ID)
**Type**: [ ] Functional [ ] Non-Functional
**Priority**: [ ] P1 (Critical) [ ] P2 (Important) [ ] P3 (Nice to Have)

## Requirement Statement

**The system SHALL** [describe what the system must do] **[under what conditions]** **so that** [business value/user benefit].

## User Story (for functional requirements)

**As a** [type of user]  
**I want** [goal/feature]  
**So that** [benefit/value]

## Acceptance Criteria

**Given** [initial context/precondition]  
**When** [action/trigger]  
**Then** [expected outcome]

- [ ] Criterion 1
- [ ] Criterion 2  
- [ ] Criterion 3

## Non-Functional Criteria (if applicable)

- **Performance**: [measurable performance requirements]
- **Security**: [security constraints or requirements]
- **Accessibility**: [accessibility standards to meet]
- **Usability**: [usability requirements]
- **Other**: [any other non-functional aspects]

## Dependencies

- **Depends on**: [list any other requirements or features this depends on]
- **Blocks**: [list any requirements that are blocked by this one]

## Implementation Notes

[Any technical considerations, constraints, or implementation guidance]

## Definition of Done

- [ ] Requirement implemented and tested
- [ ] Documentation updated
- [ ] Tests written and passing
- [ ] Code reviewed and merged
- [ ] Traceability table updated in docs/requirements.md

## Additional Context

[Add any other context, mockups, or references that help clarify the requirement]

---

**Labels to apply**: 
- Level: `level:story`, `level:epic`, or `level:goal`
- Type: `req:type:functional` or `req:type:non-functional`  
- Priority: `priority:P1`, `priority:P2`, or `priority:P3`
- NFR Category (if applicable): `nfr:performance`, `nfr:security`, `nfr:accessibility`, `nfr:reliability`
- Domain: `domain:ui`, `domain:data`, `domain:timeline`
- Status: `status:ready`