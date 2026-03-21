---
name: frontend-beginner-delivery
description: 'Build intentional, non-generic frontend features with clear beginner-level backend explanations, plus required testing and deployment readiness checks. Use when implementing UI pages/components, wiring APIs, or shipping frontend changes end-to-end.'
argument-hint: 'Describe the feature, target users, and deployment environment'
user-invocable: true
---

# Frontend Beginner Delivery

## What This Skill Produces
- A frontend implementation with a deliberate visual direction (not generic template styling)
- A beginner-friendly explanation of backend behavior that supports the frontend
- A testing checklist with concrete pass criteria
- A deployment checklist with rollback and verification notes

## When To Use
- New frontend feature work
- UI redesigns or page polish tasks
- Frontend changes that depend on API/backend behavior
- Pre-release checks for testing and deployment readiness

## Inputs To Collect
1. Feature goal and user outcome
2. Target devices and breakpoints
3. Data source and backend/API dependencies
4. Deployment target (for example: Vercel, Docker, custom server)
5. Definition of done (functional + visual + performance)

## Package Manager Preference
- Default to Bun for install, run, test, and build commands in this project.
- Use npm only if Bun is unavailable or explicitly requested.
- Preferred command patterns:
   - bun install
   - bun run dev
   - bun run test:e2e
   - bun run build

## Workflow
1. Clarify scope in one sentence and list deliverables.
2. Inspect current UI patterns and constraints in the codebase before designing.
3. Choose a clear visual direction.
   - Define typography, color variables, spacing rhythm, and motion intent.
   - Avoid default-looking layouts and repetitive card grids unless required.
4. Implement frontend changes in small, testable increments.
5. Explain backend behavior in beginner terms.
   - Describe request flow as: user action -> frontend handler -> API route -> service/data -> response -> UI update.
   - Define unfamiliar terms in plain language.
   - Include one short concrete example request/response.
6. Add or update tests.
   - Unit tests for utility/state logic.
   - Integration tests for API contracts or data flow.
   - UI behavior checks for major user paths.
7. Run verification.
   - Lint, typecheck, tests, and build all pass (using Bun commands by default).
   - Responsive checks for mobile and desktop.
   - Accessibility spot-check (semantic labels, focus visibility, keyboard path).
8. Prepare deployment notes.
   - Environment variables and config changes.
   - Migration or seed requirements if data model changed.
   - Rollout steps, smoke tests, and rollback plan.

## Decision Points
- If backend contract is unclear: pause implementation, document assumptions, and request or define API schema first.
- If design conflicts with existing design system: preserve system conventions and apply visual distinctiveness within approved tokens.
- If timeline is short: prioritize functional correctness, responsive layout, and minimum viable polish, then list follow-up enhancements.

## Quality Gates
- Frontend works on mobile and desktop without layout breakage.
- Visual style is intentional and consistent with project context.
- Backend explanation is understandable to beginners in under 2 minutes.
- At least one automated test path is present for changed behavior.
- Deployment steps are explicit enough for another developer to execute safely.

## Completion Checklist
- [ ] Feature implemented and code reviewed
- [ ] Backend explanation included in PR or notes in beginner language
- [ ] Tests added or updated and passing
- [ ] Build passes with no new lint or type errors
- [ ] Deployment and rollback notes documented

## Example Prompts
- /frontend-beginner-delivery Build a pricing comparison section with annual/monthly toggle and explain the backend billing endpoint for beginners.
- /frontend-beginner-delivery Refactor the home page hero and CTA flow, add tests, and give deployment notes for Vercel.
- /frontend-beginner-delivery Implement contact form validation and submission UI, then explain the API route step-by-step.