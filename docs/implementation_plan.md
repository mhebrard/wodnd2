# Implementation Plan - WoDnD2 (World of Darkness & Dungeons & Dragons)

## Goal Description
Create a web app for "WoDnD2", an adaptation of World of Darkness (God-Machine v2) and AD&D. The site displays RPG stories, campaigns, and character sheets. It features a "Gothic Fantasy" theme with a dark aesthetic, Crimson Red/Amber accents, and Cinzel typography. The content is written in Markdown with support for custom directives (Rules/HRP). The app is built with Next.js and deployed to GitHub Pages.

## Architecture & Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with semantic CSS variables in `globals.css`)
- **Content**: Markdown (`react-markdown`, `remark-gfm`, `remark-directive`)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

## Implemented Features

### 1. Core Structure & Theme
- **Rebranding**: Project named "WoDnD2".
- **Theme**: "Gothic Fantasy"
    - **Background**: Dark (`slate-950`)
    - **Primary Accent**: Crimson Red (`#b91c1c`)
    - **Secondary Accent**: Amber (`#d97706`)
    - **Typography**: `Cinzel` (Headings) + `Inter` (Body)
- **Centralized Palette**: Colors defined as CSS variables in `src/app/globals.css` for easy theming.

### 2. Pages & Components
- **Home Page** (`src/app/page.tsx`):
    - Hero section with split title and justified overview.
    - Links to Campaigns and Characters.
- **Navbar** (`src/components/Navbar.tsx`):
    - Responsive navigation with theme-aware styling.
- **Campaigns** (`src/app/campaigns/`):
    - Listing page fetching data from `content/campaigns`.
    - Dynamic story pages rendering Markdown.
- **Characters** (`src/app/characters/`):
    - Listing page fetching data from `content/characters`.
    - Dynamic character sheets with stats and backstory.
- **Markdown Renderer** (`src/components/MarkdownRenderer.tsx`):
    - Renders GitHub Flavored Markdown.
    - Custom directives (`:::rules`, `:::hrp`) rendered as collapsible `<details>` sections.

### 3. Data Management
- **Content Source**: Markdown files in `content/campaigns` and `content/characters`.
- **Utility** (`src/lib/markdown.ts`): Parses frontmatter and content.

### 4. Deployment
- **Config**: `output: 'export'` in `next.config.ts`.
- **Workflow**: GitHub Actions (`.github/workflows/deploy.yml`) for automated build and deploy.

## Verification
- [x] **Build**: `npm run build` passes successfully.
- [x] **Lint**: `npm run lint` passes.
- [x] **Theme**: Verified dark mode, typography, and color accents across all pages.
- [x] **Responsiveness**: Verified layout on desktop and mobile.
- [x] **Interactivity**: Verified collapsible sections and navigation links.

## Future Improvements
- Add more content (stories/characters).
- Implement search functionality.
- Add "Rules" section as a dedicated page.

