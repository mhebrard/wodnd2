# Implementation Plan - WoDnD2

## Goal
Create a modern, immersive web interface for the "World of Darkness & Dungeons & Dragons" (WoDnD²) campaign setting. The application will serve as a hub for campaign stories, character profiles, and game rules, featuring a premium "Gothic Fantasy" aesthetic with dynamic theming for different campaigns.

## Core Features

### 1. Design System & Theming
-   **Global Theme**: Dark mode default, "Gothic Fantasy" aesthetic.
-   **Typography**: `Cinzel` for headings, `Inter` for body text.
-   **Dynamic Theming**: Support for per-campaign color schemes that override the global theme.
    -   **Global Default**: Neutral Gray (Primary) / Slate (Secondary).
    -   **Campaign Specific**: Each campaign defines its own Primary and Secondary colors in metadata.

### 2. Navigation
-   **Navbar**: Responsive navigation with links to Home, Rules, Campaigns, and Characters.
-   **Breadcrumbs**: Reusable component for hierarchical navigation.
    -   Used in Campaign Detail, Scenario View, and Rule Detail pages.
-   **Pagination**: "Previous" and "Next" links for sequential content (Scenarios, Rules).
    -   Logic respects explicit `order` field in frontmatter.
-   **Explicit Ordering**: Content sorting based on `order` field (ascending) falling back to `date` (descending).

### 3. Content Management (Markdown)
-   **Structure**:
    -   `content/campaigns/[slug]/campaign.md`: Campaign metadata (title, description, colors).
    -   `content/campaigns/[slug]/[scenario].md`: Scenario content.
    -   `content/characters/*.md`: Character profiles.
    -   `content/rules/*.md`: Rulebook sections.
-   **Renderer**: Custom Markdown renderer with support for:
    -   GitHub Flavored Markdown (tables, checklists).
    -   **Custom Directives**:
        -   `:::rolls`: Collapsible section for game mechanics, styled with the campaign's primary color.
    -   Typography plugin for beautiful prose.

### 4. Campaigns Feature
-   **Campaign List**: Grid view of available campaigns, styled with their specific theme colors.
-   **Campaign Detail**: Overview of a campaign, listing its scenarios.
    -   **Visuals**: Scenario cards feature a watermark icon (`Scroll`) for visual consistency.
-   **Scenario View**: Immersive reading view for campaign chapters/scenarios, applying the campaign's unique color theme.

### 5. Characters Feature
-   **Character List**: Gallery of character cards with portraits and key details.
    -   **Dynamic Theming**: Character cards adopt the primary/secondary colors of their assigned campaign.
    -   **Card Layout**: Campaign name displayed in a styled tag (top-left), Level on the right.
-   **Character Detail**: Comprehensive view including stats, backstory, and equipment.

### 6. Rules Feature
-   **Rules Index**: List of rule categories.
-   **Rule Detail**: Detailed view of a rule section with Table of Contents.

### 7. Dynamic Landing Page
-   **Concept**: The landing page reflects the "living" state of the world.
-   **Theming Strategy**:
    -   **Hero Section**: Uses neutral gray tones to provide a stable visual anchor.
    -   **Dynamic Cards**: "Latest Scenario" and "New Challenger" cards dynamically adopt the color theme of their respective campaigns.
-   **Content**:
    -   **Hero**: Welcoming title and introduction.
    -   **Latest Updates**: Automatically displays the most recently released Scenario and Character.
-   **Data Fetching**:
    -   Utilities to aggregate scenarios from all campaigns and identify the latest content based on date.

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
    -   `getLatestScenario()`: Aggregates and sorts scenarios to find the newest release.
    -   `getLatestCharacter()`: Sorts characters to find the newest addition.

### Routing Structure
-   `/`: Home page (Hero, Latest Updates).
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
-   **Dynamic Features**:
    -   Verify Landing Page cards display correct campaign colors and metadata.
    -   Verify Character cards on listing page match their campaign themes.

### Data Management

- **Content Source**: Markdown files in `content/campaigns`, `content/characters`, and `content/rules`.
- **Utility** (`src/lib/markdown.ts`): Parses frontmatter and content.

### Deployment

- **Config**: `output: 'export'` in `next.config.ts`.
- **Workflow**: GitHub Actions (`.github/workflows/deploy.yml`) for automated build and deploy.
