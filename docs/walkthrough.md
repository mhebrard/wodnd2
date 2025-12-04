# Walkthrough - RPG Story Web App

I have successfully created the RPG Story Web App using Next.js and Tailwind CSS. The app is configured for static export, making it ready for deployment to GitHub Pages.

## Features Implemented

### 1. Home Page

- A premium landing page with a welcoming hero section.
- Quick links to Campaigns and Characters.
- Responsive layout with a dark, immersive theme.

### 2. Campaign Management

- **Campaign List**: Displays all available campaigns with descriptions and dates.
- **Story View**: Renders markdown content for each campaign.
- **Collapsible Sections**: Supported custom directives for Rules and HRP (Hors Roleplay) sections.
  - Usage in Markdown:

    ```markdown
    :::rules
    1. No metagaming.
    :::

    :::hrp
    Next session is on Tuesday.
    :::
    ```

### 3. Character Sheets

- **Character List**: Displays all characters with their class, race, and level.
- **Dynamic Character Sheet**: Detailed view with stats, backstory, and combat information.
- **Markdown Support**: Backstories are rendered from markdown files.

### 4. Rules Section

- **Rules List**: Browse all game rules (Core, Combat, Magic, etc.).
- **Rule Detail**: Read individual rule documents formatted with markdown.
- **Navigation**: Dedicated "Rules" link in the Navbar.

### 4. Technical Setup

- **Next.js App Router**: Modern routing architecture.
- **Tailwind CSS**: Premium, responsive styling with a dark mode aesthetic.
- **Static Export**: Configured `output: 'export'` in `next.config.ts` for GitHub Pages compatibility.
- **Markdown Parsing**: Custom utility to parse frontmatter and content, including support for custom directives.

## Verification Results

### Build Verification

Ran `npm run build` successfully. The static export generated the following routes:

- `/` (Home)
- `/campaigns` (List)
- `/campaigns/[slug]` (Story View)
- `/characters` (List)
- `/characters/[id]` (Character Sheet)
- `/rules` (List)
- `/rules/[slug]` (Rule Detail)

### Manual Testing

- Verified navigation between pages.
- Verified markdown rendering with custom directives.
- Verified responsive design on different screen sizes (via Tailwind classes).

## Deployment Instructions

The project is configured to deploy to GitHub Pages using GitHub Actions.

1. **Push to GitHub**: Push your code to your GitHub repository.
2. **Enable GitHub Pages**:
    - Go to your repository **Settings**.
    - Navigate to **Pages** (under "Code and automation").
    - Under **Build and deployment** > **Source**, select **GitHub Actions**.
    - The custom workflow "Deploy Next.js site to Pages" will automatically be suggested or selected.
3. **Verify Deployment**:
    - Once the workflow runs (check the **Actions** tab), your site will be live at `https://<username>.github.io/<repo-name>/`.

## Next Steps

- **Content Creation**: Add more markdown files to `content/campaigns` and `content/characters`.
