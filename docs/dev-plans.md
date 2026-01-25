# Role

Act like a mentor with many years of experience in React Native. Guide me through building a gym diary React Native app, leveraging my existing React, Next.js, and shadcn/ui experience.

# 📋 Gym Diary App - Development Plan

## 🎯 Project Philosophy

- **Goal:** Build a production-ready gym tracker while learning React Native specifics
- **Approach:** Apply Next.js patterns to React Native, focus on clean architecture
- **UI Strategy:** Use React Native Paper (similar to shadcn) + NativeWind (Tailwind for RN)
- **Component Architecture:** Maintain your proven component structure pattern

## 🏗️ Component Architecture Pattern

Every feature component follows this structure:

```
components/
└── ExerciseList/
    ├── types.ts          # Interfaces, types, props definitions
    ├── hooks.tsx         # Custom hooks, state management, business logic
    ├── view.tsx          # Main UI rendering (smart component)
    ├── container.tsx     # Bridge between hooks and view
    ├── view.loading.tsx  # Optional: Loading state UI
    └── view.empty.tsx    # Optional: Empty state UI
```

**Rules:**

- Separate concerns: logic (hooks) vs presentation (view)
- Modularize when component has multiple independent states
- Use `.tsx` for components with JSX, `.ts` for pure logic
- Container orchestrates the data flow

---

## Phase 1: Foundation Setup (Week 1)

**Goal:** Set up navigation and component architecture

### Tasks:

- [x] Install Expo CLI and create project
- [x] Set up React Native Paper
- [x] Install NativeWind (Tailwind CSS for React Native)
- [x] Set up drawer navigation with hamburger menu
- [x] Create base component structure:
  - `app/(drawer)/_layout.tsx` for drawer navigation
- [x] Create two main routes:
  - `app/(drawer)/index.tsx` - Calendar home page
  - `app/(drawer)/statistics.tsx` - Statistics page
- [x] Test on Android emulator/device

### Deliverables:

✅ App runs on Android with drawer navigation
✅ Hamburger menu toggles sidebar
✅ Can navigate between Calendar and Statistics screens
✅ First component following your architecture pattern

### Learning Focus:

- React Native equivalents of web components (View → div, Text → span)
- NativeWind syntax (same as Tailwind!)
- Expo Router drawer navigation
- Translating your component pattern to RN

---

## Phase 2: Database Setup (Week 1-2)

**Goal:** Implement complete data model with Drizzle ORM

### Tasks:

- [ ] Install Expo SQLite + Drizzle ORM dependencies
- [ ] Create `db/` folder at root level
- [ ] Create complete schema in `db/schema.ts`:
  ```typescript
  // muscle_groups: id, name, label_color
  // exercises: id, name, muscle_group_id (FK)
  // day_tracks: id, date (unique)
  // set_tracks: id, day_track_id (FK), exercise_id (FK)
  // rep_tracks: id, set_track_id (FK), rep_count, weight
  ```
- [ ] Create database operations in `db/queries/`:
  - `db/queries/muscle-groups.ts` - CRUD for muscle groups
  - `db/queries/exercises.ts` - CRUD for exercises
  - `db/queries/day-tracks.ts` - CRUD for day tracks
  - `db/queries/set-tracks.ts` - CRUD for set tracks
  - `db/queries/rep-tracks.ts` - CRUD for rep tracks
- [ ] Create `db/index.ts` to initialize database and export queries
- [ ] Seed initial muscle groups (Chest, Back, Legs, Shoulders, Arms, Core)

### Deliverables:

✅ Complete relational database with 5 tables
✅ Type-safe CRUD operations for all entities
✅ Database persists data between app restarts
✅ Seeded with initial muscle groups

### Learning Focus:

- Drizzle ORM relational queries
- Foreign key relationships in mobile DB
- TypeScript type inference with Drizzle

---

## Phase 3: Calendar Day View & Exercise CRUD (Week 2-3)

**Goal:** View and manage exercises for selected day

### Tasks:

- [ ] Create calendar component following your pattern:
  ```
  components/Calendar/
  ├── types.ts          # CalendarProps, DayData interfaces
  ├── hooks.tsx         # useCalendarData, useSelectedDate
  ├── view.tsx          # Calendar grid rendering
  └── container.tsx     # Data fetching + view orchestration
  ```
- [ ] Create dynamic route `app/(drawer)/day/[date].tsx` for day details
- [ ] Create day exercise list component:
  ```
  components/DayExerciseList/
  ├── types.ts          # Exercise, Set, Rep interfaces
  ├── hooks.tsx         # useExercises, useAddExercise
  ├── view.tsx          # Accordion list with exercises
  ├── view.empty.tsx    # Empty state ("No exercises yet")
  └── container.tsx     # Bridge hooks ↔ view
  ```
- [ ] Create exercise item accordion:
  ```
  components/ExerciseAccordion/
  ├── types.ts
  ├── hooks.tsx         # useToggle, useDeleteSet
  ├── view.tsx          # Exercise name, total volume, rep list
  └── container.tsx
  ```
- [ ] Create "Add Set" modal:
  ```
  components/AddSetModal/
  ├── types.ts
  ├── hooks.tsx         # useSetForm (rep count, weight state)
  ├── view.tsx          # Modal with inputs
  └── container.tsx
  ```
- [ ] Implement "Add Exercise" button with exercise selector

### Deliverables:

✅ Calendar highlights days with tracked exercises
✅ Click day → navigate to day detail
✅ View exercises as accordion list
✅ Add new set to exercise via modal
✅ Delete individual sets
✅ Calculate and display total volume per exercise
✅ All components follow architecture pattern

### Learning Focus:

- React Native forms (TextInput)
- Modal component patterns
- Accordion implementation with Animated API
- Your hooks/view/container pattern in practice
- Performance: useMemo for volume calculations

---

## Phase 4: Exercise Selection & Muscle Groups (Week 3-4)

**Goal:** Add exercise selector with muscle group filtering

### Tasks:

- [ ] Create exercise selector modal:
  ```
  components/ExerciseSelector/
  ├── types.ts          # ExerciseSelectorProps, FilterOptions
  ├── hooks.tsx         # useExerciseList, useSearch, useFilter
  ├── view.tsx          # Searchable, filterable exercise list
  ├── view.loading.tsx  # Skeleton loading state
  └── container.tsx
  ```
- [ ] Create muscle group filter chips:
  ```
  components/MuscleGroupFilter/
  ├── types.ts
  ├── hooks.tsx         # useSelectedGroups (multi-select state)
  ├── view.tsx          # Chip list with label colors
  └── container.tsx
  ```
- [ ] Implement search with debounce technique (you know this!)
- [ ] Create "Add New Exercise" form:
  ```
  components/CreateExercise/
  ├── types.ts
  ├── hooks.tsx         # useExerciseForm validation
  ├── view.tsx
  └── container.tsx
  ```
- [ ] Add muscle group badge to exercise items
- [ ] Polish calendar component with better date navigation

### Deliverables:

✅ Select exercise from filterable list
✅ Filter by muscle group (with color-coded chips)
✅ Search exercises with debounce
✅ Create new exercise with muscle group assignment
✅ Visual muscle group indicators throughout app

### Learning Focus:

- Debounce in React Native (same pattern as web!)
- Multi-select chip components
- Modal navigation patterns
- Color theming with muscle groups

---

## Phase 5: UI Polish & Performance (Week 4-5)

**Goal:** Optimize performance and enhance UX

### Tasks:

- [ ] Optimize list rendering:
  - Use `FlatList` for exercise lists (virtualization)
  - Implement `React.memo` for ExerciseAccordion items
  - Add `useCallback` for event handlers passed to lists
- [ ] Add loading states to all data-fetching components:
  - Create `view.loading.tsx` variants
  - Skeleton placeholders for lists
- [ ] Add empty states:
  - Create `view.empty.tsx` variants
  - Helpful CTAs ("Add your first exercise!")
- [ ] Improve form validation:
  - Weight must be positive number
  - Reps must be positive integer
  - Show validation errors
- [ ] Add success feedback:
  - Toast notifications for CRUD operations
  - Haptic feedback on button presses
- [ ] Polish animations:
  - Smooth accordion expand/collapse
  - Modal slide transitions
  - Swipe gestures for delete

### Deliverables:

✅ Smooth scrolling even with many exercises
✅ Professional loading/empty states
✅ Form validation with error messages
✅ Haptic and visual feedback
✅ Optimized with React.memo and useCallback

### Learning Focus:

- FlatList vs ScrollView performance
- React Native Reanimated basics
- Your modularization pattern for performance
- Haptic feedback API

---

## Phase 6: Statistics Dashboard (Week 5-6)

**Goal:** Data visualization and insights (placeholder for now)

### Tasks:

- [ ] Create statistics page structure in `app/(drawer)/statistics.tsx`
- [ ] Create stat card component:
  ```
  components/StatCard/
  ├── types.ts          # Metric type, format options
  ├── hooks.tsx         # useMetricCalculation
  ├── view.tsx          # Card with number + label
  └── container.tsx
  ```
- [ ] Implement basic metrics (SQL aggregation queries):
  - Total workouts this month
  - Total volume (sum of reps × weight)
  - Most trained muscle group
  - Current week streak
- [ ] Placeholder for future charts:
  ```
  components/VolumeChart/
  ├── types.ts
  ├── hooks.tsx         # useChartData
  ├── view.tsx          # [To be implemented: Victory Native or Chart Kit]
  └── container.tsx
  ```
- [ ] Create "Coming Soon" view for advanced analytics

### Deliverables:

✅ Statistics page with basic metrics
✅ Stat cards following component pattern
✅ Database aggregation queries
✅ Placeholder for charts (Phase 7+)

### Learning Focus:

- SQL aggregation with Drizzle
- Data transformation for charts
- Memo-ized expensive calculations

---

## 🛠️ Tech Stack

| Category            | Choice                     | Why                                         |
| ------------------- | -------------------------- | ------------------------------------------- |
| **Framework**       | Expo                       | Hot reload, easy Android builds             |
| **UI Library**      | React Native Paper         | Similar to shadcn, Material Design          |
| **Styling**         | NativeWind (Tailwind CSS)  | Same syntax as your web projects!           |
| **Database**        | Expo SQLite + Drizzle ORM  | Type-safe, relational, no raw SQL           |
| **Navigation**      | Expo Router (Drawer)       | File-based routing like Next.js             |
| **Forms**           | React Hook Form (optional) | Same as web, or manual useState             |
| **State**           | React hooks + Context      | No Redux, your component pattern handles it |
| **Performance**     | React.memo + useCallback   | You already know this!                      |
| **Animations**      | Reanimated + Animated API  | Smooth 60fps animations                     |
| **Charts (Future)** | Victory Native / Chart Kit | Phase 7+                                    |

---

## 📦 Project Structure (Your Pattern + Expo Router)

```
app/
├── _layout.tsx                      # Root layout with providers
└── (drawer)/
    ├── _layout.tsx                  # Drawer navigation config
    ├── index.tsx                    # Calendar home page
    ├── statistics.tsx               # Statistics dashboard
    └── day/
        └── [date].tsx               # Day detail (dynamic route)

components/
├── Layout/
│   └── Sidebar/
│       ├── types.ts
│       ├── hooks.tsx                # Navigation state
│       ├── view.tsx                 # Drawer menu UI
│       └── container.tsx
├── Calendar/
│   ├── types.ts                     # CalendarProps, DayData
│   ├── hooks.tsx                    # useCalendarData, useSelectedDate
│   ├── view.tsx                     # Calendar grid
│   └── container.tsx
├── DayExerciseList/
│   ├── types.ts                     # Exercise, Set, Rep types
│   ├── hooks.tsx                    # useExercises, CRUD operations
│   ├── view.tsx                     # Main list view
│   ├── view.empty.tsx               # "No exercises" state
│   └── container.tsx
├── ExerciseAccordion/
│   ├── types.ts
│   ├── hooks.tsx                    # useToggle, useDeleteSet
│   ├── view.tsx                     # Collapsible exercise details
│   └── container.tsx
├── AddSetModal/
│   ├── types.ts
│   ├── hooks.tsx                    # useSetForm (validation)
│   ├── view.tsx                     # Modal with inputs
│   └── container.tsx
├── ExerciseSelector/
│   ├── types.ts
│   ├── hooks.tsx                    # useSearch, useFilter
│   ├── view.tsx                     # Searchable list
│   ├── view.loading.tsx             # Skeleton loader
│   └── container.tsx
├── MuscleGroupFilter/
│   ├── types.ts
│   ├── hooks.tsx                    # useSelectedGroups
│   ├── view.tsx                     # Color-coded chips
│   └── container.tsx
├── CreateExercise/
│   ├── types.ts
│   ├── hooks.tsx                    # Form validation
│   ├── view.tsx
│   └── container.tsx
└── StatCard/
    ├── types.ts
    ├── hooks.tsx                    # Metric calculation
    ├── view.tsx
    └── container.tsx

db/
├── schema.ts                        # All 5 tables (Drizzle schema)
├── index.ts                         # DB initialization + exports
└── queries/
    ├── muscle-groups.ts             # CRUD for muscle_groups
    ├── exercises.ts                 # CRUD for exercises
    ├── day-tracks.ts                # CRUD for day_tracks
    ├── set-tracks.ts                # CRUD for set_tracks
    └── rep-tracks.ts                # CRUD for rep_tracks

lib/
├── utils.ts                         # Helper functions (debounce, etc)
└── constants.ts                     # Colors, muscle groups config
```

**Architecture Flow:**

```
User Interaction
    ↓
container.tsx (orchestrates)
    ↓
hooks.tsx (business logic, state)
    ↓
view.tsx (renders UI)
```

---

## ⚡ Quick Wins to Stay Motivated

After each phase, you'll have a **working feature** to show off!

- **Phase 1:** "I built a drawer navigation app!"
- **Phase 2:** "I have a complete relational database!"
- **Phase 3:** "I can track workouts with full CRUD!"
- **Phase 4:** "I can search and filter exercises!"
- **Phase 5:** "It performs like a native app!"
- **Phase 6:** "I have workout statistics!"

---

## 🚫 What to AVOID (Keep It Simple)

- ❌ Don't build authentication yet
- ❌ Don't add cloud sync
- ❌ Don't optimize performance prematurely (until Phase 5)
- ❌ Don't write tests yet (focus on learning first)
- ❌ Don't build custom UI components (use React Native Paper)

---

## 📊 Time Estimate

| Phase   | Time     | Difficulty |
| ------- | -------- | ---------- |
| Phase 1 | 2-3 days | Easy       |
| Phase 2 | 3-4 days | Medium     |
| Phase 3 | 5-6 days | Medium     |
| Phase 4 | 3-4 days | Medium     |
| Phase 5 | 3-4 days | Easy       |
| Phase 6 | 2-3 days | Easy       |

**Total: 3-4 weeks** (working part-time)

---

## 🎓 Learning Milestones

By the end, you'll understand:

- ✅ Translating React/Next.js patterns to React Native
- ✅ NativeWind (Tailwind in React Native)
- ✅ Expo Router drawer navigation (like Next.js App Router)
- ✅ Your component architecture pattern in mobile context
- ✅ Mobile-specific UX (modals, accordions, haptics)
- ✅ Drizzle ORM with relational SQLite database
- ✅ Performance optimization with React.memo/useCallback (same as web!)
- ✅ FlatList virtualization for long lists
- ✅ Android app deployment basics

**Key Insight:** 80% of your React knowledge transfers directly. The main differences:

- `<div>` → `<View>`, `<span>` → `<Text>`
- CSS → NativeWind (Tailwind classes)
- Forms use `TextInput` instead of `<input>`
- Navigation is file-based (like Next.js!)

---

## 🚀 Getting Started (Right Now)

**Step 1:** Install NativeWind (Tailwind for React Native)

```bash
npm install nativewind
npm install --save-dev tailwindcss
npx tailwindcss init
```

**Step 2:** Configure `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**Step 3:** Create your first component with the pattern:

```
components/HomeButton/
├── types.ts
├── hooks.tsx
├── view.tsx
└── container.tsx
```

**Step 4:** Run the app:

```bash
npx expo start
# Press 'a' for Android
```

---

## 📝 Example: Component Pattern in React Native

**components/ExerciseAccordion/types.ts**

```typescript
export interface Exercise {
  id: number;
  name: string;
  muscleGroupId: number;
  totalVolume: number;
}

export interface ExerciseAccordionProps {
  exercise: Exercise;
  onDelete: (id: number) => void;
}
```

**components/ExerciseAccordion/hooks.tsx**

```typescript
import { useState, useCallback } from "react";

export function useExerciseAccordion(exerciseId: number) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return {
    isExpanded,
    toggleExpanded,
  };
}
```

**components/ExerciseAccordion/view.tsx**

```typescript
import { View, Text, TouchableOpacity } from 'react-native';
import { Exercise } from './types';

interface ViewProps {
  exercise: Exercise;
  isExpanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export function ExerciseAccordionView({
  exercise,
  isExpanded,
  onToggle,
  onDelete,
}: ViewProps) {
  return (
    <View className="bg-white rounded-lg p-4 mb-2">
      <TouchableOpacity onPress={onToggle}>
        <Text className="text-lg font-bold">{exercise.name}</Text>
        <Text className="text-gray-600">Volume: {exercise.totalVolume}kg</Text>
      </TouchableOpacity>
      {isExpanded && (
        <TouchableOpacity onPress={onDelete} className="mt-2">
          <Text className="text-red-500">Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
```

**components/ExerciseAccordion/container.tsx**

```typescript
import React from 'react';
import { ExerciseAccordionProps } from './types';
import { useExerciseAccordion } from './hooks';
import { ExerciseAccordionView } from './view';

export function ExerciseAccordion({ exercise, onDelete }: ExerciseAccordionProps) {
  const { isExpanded, toggleExpanded } = useExerciseAccordion(exercise.id);

  return (
    <ExerciseAccordionView
      exercise={exercise}
      isExpanded={isExpanded}
      onToggle={toggleExpanded}
      onDelete={() => onDelete(exercise.id)}
    />
  );
}
```

**See? Same pattern you use in Next.js! 🎯**

---

## 📱 UI/UX Summary

### Home (Calendar Page)

- Calendar grid with today highlighted
- Days with exercises marked with indicator dot
- Click day → navigate to day detail page

### Day Detail Page

- Date header with navigation arrows
- "Add Exercise" button at top
- List of exercises (accordion format):
  - **Collapsed:** Exercise name + total volume
  - **Expanded:** List of sets with reps × weight
  - Delete button for each set
- Empty state: "No exercises logged today. Tap Add Exercise to start!"

### Exercise Selector Modal

- Search bar at top (with debounce)
- Muscle group filter chips (multi-select, color-coded)
- Scrollable list of exercises
- "+ Create New Exercise" button at bottom

### Add Set Modal

- Exercise name header
- Rep count input (number)
- Weight input (number with decimal)
- Cancel / Save buttons
- Form validation

### Statistics Page

- Metric cards:
  - Total Workouts (this month)
  - Total Volume (kg)
  - Most Trained Muscle Group
  - Current Streak
- Placeholder for charts: "Charts coming soon!"

---
