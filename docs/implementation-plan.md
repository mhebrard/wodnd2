# Implementation Plan: TTRPG Story Web App

## 1. Project Setup

- Use Next.js for static export and routing
- Configure Tailwind CSS for styling
- Set up static export for GitHub Pages (`next export`)
- Add deployment config for GitHub Pages

## 2. Core Features

- Home page: Overview of the project and campaigns
- Navigation bar: List and switch between campaigns
- Markdown rendering: Use a library (e.g., `react-markdown`) for story content
- Collapsible sections: Use React state/components for rules and HRP blocks
- Dynamic character sheets: React components for stats, editable fields
- Character pages: Markdown + dynamic sheet, linked from story
- Internal linking: Use markdown links or Next.js routing

## 3. Content Management

- Store stories and campaigns in markdown files (e.g., `/content/campaigns/*.md`)
- Store character data in JSON or markdown (e.g., `/content/characters/*.json` or `.md`)
- Organize assets (images, handouts) in `/public`

## 4. Deployment

- Test static export locally
- Push to GitHub, deploy to `gh-pages` branch
- Document deployment steps in `README.md`

## 5. Polish & QA

- Ensure responsive design for mobile/desktop
- Accessibility: semantic HTML, ARIA labels
- Final review of content and links

---

**Next Steps:**
- Scaffold the app and set up the repo for GitHub Pages deployment.
- Implement navigation, markdown rendering, and character sheet components.
- Add sample content and test deployment.
