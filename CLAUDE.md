# chinaimpoirt

## Tech Stack
- Vite + React
- Tailwind CSS
- PostCSS

## Design System

This project uses the **design-engineer** skill for consistent UI development.

### How to Use

When building UI components or pages, tell Claude:
- "Use the design-engineer skill" to activate design principles
- "Read the design system" to load current decisions from `.ds-engineer/system.md`
- "Help me set up my design direction" to establish personality, foundation, and depth strategy

### Key Files
- `.claude/skills/design-engineer/SKILL.md` - Design engineering principles
- `.ds-engineer/system.md` - Your design decisions (tokens, patterns, direction)

### Design Workflow
1. Before building UI, read `.ds-engineer/system.md`
2. Work within established direction and tokens
3. Update system.md when making new design decisions
4. Validate against the 4px grid, color palette, and depth strategy
