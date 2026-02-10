# DumbSmart Component Generator

A skill for generating React Native components following the dumbsmart pattern with container/hooks/view separation and type-safe props.

## Structure

- `rules/` - Individual rule files (one per rule)
- `metadata.json` - Skill metadata (version, description)
- **`SKILL.md`** - Main skill prompt (overview and quick reference)
- **`AGENTS.md`** - Compiled output with all rules (for full context)
- **`README.md`** - This file

## Rules

### Architecture (HIGH Priority)

- `pattern-overview.md` - Overall component structure
- `types-structure.md` - ContainerProps and ViewProps separation
- `view-structure.md` - Pure presentational components
- `container-structure.md` - Hook orchestration
- `type-safety.md` - TypeScript interfaces and type checking

### Hooks (MEDIUM Priority)

- `hooks-structure.md` - Single-responsibility hooks
- `hooks-composition.md` - Main hook pattern for composing multiple hooks

### Views (MEDIUM Priority)

- `view-variants.md` - Loading, empty, and error state views

### Organization (MEDIUM Priority)

- `exports-structure.md` - Container as default export
- `nested-components.md` - Child component pattern

## Usage

Invoke the skill with:
```bash
/dumbsmart ComponentName [--hooks hookA,hookB] [--variants loading,error]
```

The agent will:
1. Ask for all requirements in one message
2. Read relevant rule files based on complexity
3. Generate all component files in batch
4. Show the file tree created

## Component Patterns

**Simple Component:**
```
components/user-profile/
├── hooks/
│   ├── useUserData.tsx
│   └── index.ts
├── types.ts
├── view.tsx
├── container.tsx
└── index.ts
```

**Complex Component:**
```
components/product-list/
├── hooks/
│   ├── useProducts.tsx
│   ├── useDeleteProduct.tsx
│   ├── useProductDialogs.tsx
│   └── index.ts (composes all hooks)
├── types.ts
├── view.tsx
├── view.loading.tsx
├── view.empty.tsx
├── container.tsx
├── index.ts
└── product-item/ (nested component)
    ├── hooks/
    ├── types.ts
    ├── view.tsx
    ├── container.tsx
    └── index.ts
```

## Creating a New Rule

1. Copy a rule file from `rules/` as a template
2. Follow the frontmatter format:
   ```yaml
   ---
   title: Rule Title
   impact: HIGH|MEDIUM|LOW
   impactDescription: What this rule achieves
   tags: tag1, tag2
   ---
   ```
3. Include:
   - Brief explanation
   - **Incorrect** example with description
   - **Correct** example with description
   - Reference links

## File Naming Convention

- `pattern-*.md` - Overall architecture patterns
- `types-*.md` - TypeScript and type-related rules
- `hooks-*.md` - Hook organization and composition
- `view-*.md` - View component patterns
- `container-*.md` - Container component patterns
- `exports-*.md` - Module exports patterns
- `nested-*.md` - Nested component patterns

## Component Complexity Examples

**Simple Component:**
- Single hook for data or navigation
- No variant views needed
- Example structure shown in `pattern-overview.md`

**Complex Component:**
- Multiple hooks composed together
- Variant views for different states
- Nested child components
- Example structure shown in all rule files combined
