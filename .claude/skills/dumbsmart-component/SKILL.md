---
name: dumbsmart-component
description: Generate React Native components following the dumbsmart pattern (container/hooks/view separation) with type-safe props. Optimized for token efficiency.
license: MIT
metadata:
  author: dat.ta
  version: '1.0.0'
---

# DumbSmart Component Generator

Generate React Native components following the established dumbsmart architecture pattern in this codebase.

## When to Use

Use this skill when creating new components that need:
- Separation of concerns (logic vs presentation)
- Reusable hooks
- Type-safe props
- Loading/error states
- Multiple related components (nested structure)

## Pattern Overview

Every component follows this structure:
```
component-name/
├── hooks/
│   ├── useHookA.tsx
│   ├── useHookB.tsx
│   └── index.ts
├── types.ts
├── view.tsx
├── view.loading.tsx (optional)
├── container.tsx
└── index.ts
```

## Architecture Principles

1. **Container** orchestrates hooks and decides which view to render
2. **View** is pure presentation with typed ViewProps
3. **Hooks** are single-responsibility, composed in main hook
4. **Types** separate ContainerProps and ViewProps
5. **Exports** - container is default export from index.ts

## Quick Reference

### Component Types

**Simple Component** (1 hook, no variants):
- Basic data fetching or navigation
- No loading states
- Use: `/dumbsmart ComponentName`

**Medium Component** (1-2 hooks, variants):
- Data + one action (edit/delete)
- Loading/empty states
- Use: `/dumbsmart ComponentName --variants loading`

**Complex Component** (3+ hooks, multiple variants):
- Data queries + mutations + dialogs
- Multiple states (loading/error/empty)
- Use: `/dumbsmart ComponentName --hooks useData,useMutation,useDialogs --variants loading,error`

### Rules by Priority

| Priority | Rule | File |
|----------|------|------|
| HIGH | Pattern Overview | `rules/pattern-overview.md` |
| HIGH | View Structure | `rules/view-structure.md` |
| HIGH | Container Structure | `rules/container-structure.md` |
| HIGH | Type Safety | `rules/type-safety.md` |
| MEDIUM | Hooks Structure | `rules/hooks-structure.md` |
| MEDIUM | Hooks Composition | `rules/hooks-composition.md` |
| MEDIUM | View Variants | `rules/view-variants.md` |
| MEDIUM | Exports Structure | `rules/exports-structure.md` |
| MEDIUM | Nested Components | `rules/nested-components.md` |

## Usage

**Basic Invocation:**
```bash
/dumbsmart ComponentName
```

**With Options:**
```bash
/dumbsmart ComponentName --hooks hookA,hookB --variants loading,error
```

**Nested Component:**
```bash
/dumbsmart parent/child
```

## Generation Process

When you invoke this skill, the agent will:

1. **Ask for requirements** (single message):
   - Component name and location
   - Container props (what parent passes)
   - Hooks needed (data/mutations/dialogs/navigation)
   - View variants (loading/error/empty)
   - Nested components

2. **Read relevant rule files** based on complexity:
   - Always: `pattern-overview.md`, `types-structure.md`, `container-structure.md`, `view-structure.md`
   - For hooks: `hooks-structure.md`, `hooks-composition.md`
   - For variants: `view-variants.md`
   - For nested: `nested-components.md`
   - For types: `type-safety.md`, `exports-structure.md`

3. **Generate all files** in one batch following the templates in rule files

4. **Verify structure** matches pattern

## Component Examples

Each rule file contains complete examples for different scenarios:

**Simple Component:**
- 1 hook (data fetching or navigation)
- No variant views
- Example: User profile with basic data display

**Medium Component:**
- 1-2 hooks (data + one action)
- 1-2 variant views (loading, empty)
- Example: Product list with loading state

**Complex Component:**
- 3+ hooks (data, mutations, dialogs)
- Multiple variant views (loading, error, empty)
- Example: User dashboard with editing and deletion

**Nested Component:**
- Parent component with child components
- Each child follows same pattern
- Example: User profile with post list items

## Token Optimization

This skill saves 60-75% tokens compared to manual generation:
- Single-pass information gathering
- Template-based generation from rule files
- Batch file creation
- No explanations unless requested

## Next Steps

After generation:
1. Review generated types match your data models
2. Implement hook logic (queries/mutations)
3. Implement view rendering
4. Test component integration

Read individual rule files in `rules/` directory for detailed examples and patterns.
