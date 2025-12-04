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

- [x] **Characters Module**
  - [x] Character List Page
  - [x] Character Detail Page
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

## Styling & Polish
- [x] **Visual Design**
  - [x] "Gothic Fantasy" Dark Theme
  - [x] Glassmorphism effects
  - [x] Hover animations and transitions
  - [x] Custom typography styling (`@tailwindcss/typography`)

## Documentation & Deployment
- [x] **Documentation**
  - [x] Implementation Plan
  - [x] Task List
  - [x] Walkthrough
  - [x] Test Plans
- [x] **Deployment**
  - [x] GitHub Pages Configuration
  - [x] GitHub Actions Workflow
