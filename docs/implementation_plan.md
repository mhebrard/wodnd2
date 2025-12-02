# Implementation Plan - RPG Story Web App

## Goal Description
Create a web app that can be deployed on github.io. The website will display stories created from a table top role playing game. The website should have a home page with overview, a nav bar that allow to navigate between the different campagnes. The main content will be storyline, written in markdown for ease of content editing. From the story, there will be link to character page including dynamic character sheets and character story. From the main story there will be collapsible section to specify rules and HRP.

## User Review Required
> [!IMPORTANT]
> **Framework Choice**: I am proceeding with **Next.js**. I will re-initialize the project to ensure a clean state.
> **Styling**: I will use **Tailwind CSS** as requested.
> **Deployment**: The app will be configured for `github.io` (static export).

## Proposed Changes

### Project Initialization
#### [NEW] [package.json](file:///Users/mhebrard/Documents/GitHub/wodnd2/package.json)
- Initialize new Next.js project with TypeScript and Tailwind CSS.
- Dependencies: `react`, `react-dom`, `next`, `react-markdown`, `remark-gfm`, `lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`.

#### [NEW] [next.config.js](file:///Users/mhebrard/Documents/GitHub/wodnd2/next.config.js)
- Configure `output: 'export'` for GitHub Pages compatibility.
- Configure `images: { unoptimized: true }` for static export.

### Core Structure
#### [NEW] src/app/layout.tsx
- Root layout with Navigation Bar.
- Global styles import (Tailwind directives).

#### [NEW] src/app/page.tsx
- Home page with overview.

#### [NEW] src/components/Navbar.tsx
- Navigation links for Campaigns, Characters, Rules.

### Content & Features
#### [NEW] src/lib/markdown.ts
- Utility to parse markdown content.

#### [NEW] src/app/campaigns/[slug]/page.tsx
- Dynamic route for displaying campaign stories.
- Will render Markdown content.

#### [NEW] src/components/MarkdownRenderer.tsx
- Component to render markdown with custom directives for Collapsible sections (Rules/HRP).
- Styled with Tailwind typography plugin (`@tailwindcss/typography`).

#### [NEW] src/app/characters/page.tsx
- List of characters.

#### [NEW] src/app/characters/[id]/page.tsx
- Dynamic character sheet view.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify static export succeeds.
- Run `npm run lint` to check for code quality issues.

### Manual Verification
- **Home Page**: Verify overview text is visible and styled with Tailwind.
- **Navigation**: Click links to ensure they route correctly.
- **Story View**:
    - Open a campaign page.
    - Verify markdown renders correctly.
    - Test collapsible sections (Rules/HRP) work interactively.
- **Character Sheet**:
    - Navigate to a character.
    - Verify dynamic data is displayed.
