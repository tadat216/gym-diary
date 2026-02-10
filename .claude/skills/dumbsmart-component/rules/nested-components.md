---
title: Nested Components - Child Component Pattern
impact: MEDIUM
impactDescription: Organize related components hierarchically
tags: nested, hierarchy, organization
---

## Nested Components - Child Component Pattern

Create components inside parent component directories when they are tightly coupled and depend on the parent.

**When to Nest:**
- Component is only used within parent
- Component depends on parent's data or context
- Component is part of parent's implementation detail

**Structure:**

```
parent-component/
├── hooks/
├── types.ts
├── view.tsx
├── container.tsx
├── index.ts
└── child-component/
    ├── hooks/
    ├── types.ts
    ├── view.tsx
    ├── container.tsx
    └── index.ts
```

**Example:**

```
user-profile/
├── hooks/
├── types.ts
├── view.tsx
├── container.tsx
├── index.ts
├── profile-header/          # Nested: only used in user-profile
│   ├── hooks/
│   ├── types.ts
│   ├── view.tsx
│   ├── container.tsx
│   └── index.ts
└── post-list-item/          # Nested: only used in user-profile
    ├── hooks/
    ├── types.ts
    ├── view.tsx
    ├── container.tsx
    └── index.ts
```

**Parent View Usage:**

```tsx
// user-profile/view.tsx
import ProfileHeader from "./profile-header";
import PostListItem from "./post-list-item";
import { ViewProps } from "./types";

const View = ({ user, posts }: ViewProps) => {
  return (
    <View>
      <ProfileHeader user={user} />
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </View>
  );
};

export default View;
```

**When NOT to Nest:**
- Component is reusable across multiple parents
- Component is a generic UI element (buttons, cards, modals)
- Component could be useful elsewhere in the future

**Example - DON'T nest generic components:**
```
❌ user-profile/button/     # Button is reusable
✅ components/button/        # Shared across app

❌ user-profile/card/       # Card is reusable
✅ components/card/          # Shared across app

✅ user-profile/profile-header/  # Only used here
```