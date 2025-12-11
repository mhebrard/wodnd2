# Task List

## Core Infrastructure
- [x] **Project Setup**
  - [x] Initialize Next.js 15+ App Router
  - [x] Configure Tailwind CSS v4
  - [x] Set up Fonts (Cinzel, Inter)
  - [x] Create `globals.css` with semantic variables

- [x] **Architecture**
  - [x] Setup App Router Structure
  - [x] Create Layout (Navbar, Footer)
  - [x] Implement `MarkdownRenderer` component
  - [x] Configure `remark-gfm` and `remark-directive`
  - [x] Create data fetching utilities (`src/lib/markdown.ts`)

## Features
- [x] **Navigation System**
  - [x] Implement Navbar (Home, Rules, Campaigns, Characters)
  - [x] Responsive Mobile Menu
  - [x] **Breadcrumbs Component** (Hierarchical navigation)
  - [x] **PaginationNav Component** (Previous/Next navigation)

- [x] **Landing Page**
  - [x] **Data Logic**: Implement `getLatestScenario()` and `getLatestCharacter()`
  - [x] **Hero Section**: Neutral title with dynamic highlights
  - [x] **Latest Updates**: Cards for newest Scenario and Character
  - [x] **Theming**: Dynamic card colors based on campaign

- [x] **Markdown Extensions**
  - [x] Implement `:::rolls` directive (Collapsible, Primary Color)

- [x] **Characters Module**
  - [x] Character List Page
    - [x] Dynamic Theming (Campaign colors)
    - [x] Campaign Name Tags
  - [x] Character Detail Page
  - [x] **Character Sheet Implementation**
    - [x] **Data Structure**: Update `Character` and `OtherTraits` to include Advantages (Size, Speed, Defense, Armor, Initiative).
    - [x] **Layout**: Implement 3-column structure (Skills | Traits/Advantages | Energy/Paths).
    - [x] **Content**: Update `grommash.md` with full Skill list and Advantages.
    - [x] **Components**:
      - [x] `StatDots`: Reusable component for rendering 1-5 dot ratings.
      - [x] `AttributeGrid`: 3x3 grid display for Attributes.
      - [x] `SkillColumn`: List rendering for Skills (supports specialties).
      - [x] `HealthBoxes`: Component for Health/Willpower/Mana tracking boxes.
      - [x] `EquipmentTable`: Responsive table for weapons and gear.
    - [x] **Features & Polish**:
      - [x] **Merits**: Ensure 10 fixed lines are always displayed.
      - [x] **Energies**: Encapsulate trackers (Health, Willpower, Mastery, Mana) in a dedicated section (Mana 2x10).
      - [x] **XP**: Track "Spent / Total" values.
      - [x] **Theming**:
        - [x] Fetch campaign metadata to dynamic colors.
        - [x] Apply primary color to filled dots; keep empty dots neutral.
      - [x] **Detailed Polish**: Path separator, specific styling.
  - [x] Sample Content (Grommash)

- [x] **Rules Module**
  - [x] Rules Index Page
  - [x] Rule Detail Page with TOC
  - [x] Content (Core, Magic, Combat, Character Creation)
  - [x] Implement Explicit Ordering (1. Core, 2. Creation, etc.)
  - [x] Integrate Breadcrumbs and Pagination

- [x] **Campaigns Module**
  - [x] **Data Structure**
    - [x] Nested content (`campaign.md` + scenarios)
    - [x] Dynamic Theming System (per-campaign colors)
  - [x] **Pages**
    - [x] Campaign List Page
    - [x] Campaign Detail Page (with Breadcrumbs)
    - [x] Scenario View Page (with Breadcrumbs & Pagination)
  - [x] **Content**
    - [x] "The Lost Mines" (Amber/Red Theme)
    - [x] "Demon Hunter" (Purple/Blue Theme)
  - [x] **UI Polish**
    - [x] Add watermark icon to scenario cards

## Styling & Polish
- [x] **Visual Design**
  - [x] "Gothic Fantasy" Dark Theme
  - [x] Glassmorphism effects
  - [x] Hover animations and transitions
  - [x] Custom typography styling (`@tailwindcss/typography`)
