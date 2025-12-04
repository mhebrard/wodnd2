# Implementation Plan - WoDnD2

## Goal
Create a modern, immersive web interface for the "World of Dungeons & Dragons 2" (WoDnD2) campaign setting. The application will serve as a hub for campaign stories, character profiles, and game rules, featuring a premium "Gothic Fantasy" aesthetic with dynamic theming for different campaigns.

## Core Features

### 1. Design System & Theming
-   **Global Theme**: Dark mode default, "Gothic Fantasy" aesthetic.
-   **Typography**: `Cinzel` for headings, `Inter` for body text.
-   **Dynamic Theming**: Support for per-campaign color schemes that override the global theme.
    -   **Global Default**: Amber (Primary) / Red (Secondary).
    -   **Campaign Specific**: Each campaign defines its own Primary and Secondary colors in metadata.

### 2. Navigation
-   **Navbar**: Responsive navigation with links to Home, Rules, Campaigns, and Characters.
-   **Breadcrumbs**: Contextual navigation within Campaign and Rule sections.

### 3. Content Management (Markdown)
-   **Structure**:
    -   `content/campaigns/[slug]/campaign.md`: Campaign metadata (title, description, colors).
    -   `content/campaigns/[slug]/[scenario].md`: Scenario content.
    -   `content/characters/*.md`: Character profiles.
    -   `content/rules/*.md`: Rulebook sections.
-   **Renderer**: Custom Markdown renderer with support for:
    -   GitHub Flavored Markdown (tables, checklists).
    -   Directives for custom components (e.g., `::character-stat-block`).
    -   Typography plugin for beautiful prose.

### 4. Campaigns Feature
-   **Campaign List**: Grid view of available campaigns, styled with their specific theme colors.
-   **Campaign Detail**: Overview of a campaign, listing its scenarios.
-   **Scenario View**: Immersive reading view for campaign chapters/scenarios, applying the campaign's unique color theme.

### 5. Characters Feature
-   **Character List**: Gallery of character cards with portraits and key details.
-   **Character Detail**: Comprehensive view including stats, backstory, and equipment.

### 7. Navigation Enhancements
-   **Breadcrumbs**: Reusable component for hierarchical navigation.
    -   Used in Campaign Detail, Scenario View, and Rule Detail pages.
-   **Pagination**: "Previous" and "Next" links for sequential content.
    -   Used in Scenario View (next/prev scenario) and Rule Detail (next/prev rule).
    -   Logic respects explicit `order` field in frontmatter.
-   **Explicit Ordering**: Content sorting based on `order` field (ascending) falling back to `date` (descending).

## Technical Architecture

### Stack
-   **Framework**: Next.js 15+ (App Router)
-   **Styling**: Tailwind CSS v4
-   **Content**: `gray-matter` for frontmatter, `react-markdown` for rendering.
-   **Icons**: `lucide-react`

### Data Fetching
-   **`src/lib/markdown.ts`**: Central utility for fetching and parsing markdown content.
    -   `getAllCampaigns()`: Fetches campaign metadata.
    -   `getCampaignBySlug()`: Fetches single campaign details.
    -   `getAllScenarios()`: Fetches scenarios for a specific campaign.
    -   `getAllPosts()`: Generic fetcher for flat content (Characters, Rules).

### Routing Structure
-   `/`: Home page (Hero, Spotlight).
-   `/campaigns`: List of campaigns.
-   `/campaigns/[slug]`: Campaign detail & scenario list.
-   `/campaigns/[slug]/[scenario]`: Scenario reading view.
-   `/characters`: Character gallery.
-   `/characters/[id]`: Character profile.
-   `/rules`: Rules index.
-   `/rules/[slug]`: Rule section detail.

## Verification Plan

### Automated Tests
-   `npm run dev`: Ensure build success and runtime stability.
-   **Browser Tests**: Verify navigation flows and rendering.

### Manual Verification
-   **Theming**: Verify global theme and campaign-specific overrides.
-   **Content**: Check markdown rendering, image loading, and link navigation.
-   **Navigation**: Verify Breadcrumbs and Previous/Next links work correctly.
-   **Responsiveness**: Ensure layout adapts to mobile and desktop screens.
- **Characters** (`src/app/characters/`):
  - Listing page fetching data from `content/characters`.
  - Dynamic character sheets with stats and backstory.
  - Listing page fetching data from `content/rules`.
  - Dynamic rule pages rendering Markdown.
- **Markdown Renderer** (`src/components/MarkdownRenderer.tsx`):
  - Renders GitHub Flavored Markdown.
  - Custom directives (`:::rules`, `:::hrp`) rendered as collapsible `<details>` sections.

### 3. Data Management

- **Content Source**: Markdown files in `content/campaigns`, `content/characters`, and `content/rules`.
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
- [x] **Rules Feature**: Verified rules listing and detail pages.

## Future Improvements

- Add more content (stories/characters).
- Implement search functionality.
