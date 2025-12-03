# World of Darkness & Dungeons & Dragons (WoDnD2)

WoD&D² is an adaptation of the World of Darkness, the storytelling system God-Machine version 2 with a dual goal. First, extract the core rules from the 226 pages of the core rulebook and simplify them to an easy and quick use. Second, extend the rules for applying them to a heroic fantasy universe inspired from Advanced Dungeons & Dragons.

This project, including the website and its content, is an experiment created with Github Copilot. Project artifacts (Task List, Implementation Plan) can be found in the docs/ folder.

## Deploying to GitHub Pages

This project uses Next.js static export to deploy to GitHub Pages.

### 1. Configure Your GitHub Repository

1. **Push your code to GitHub.**
	- Make sure your project is in a GitHub repository (e.g., `https://github.com/<your-username>/wodnd2`).
2. **Set the correct repository name.**
	- If your repo is not named `wodnd2`, update `basePath` and `assetPrefix` in `next.config.js` to match your repo name.
3. **Enable GitHub Pages:**
	- Go to your repository on GitHub.
	- Click on `Settings` > `Pages` in the sidebar.
	- Under "Build and deployment", set:
	  - **Source:** Deploy from a branch
	  - **Branch:** `gh-pages` (this branch will be created automatically by the deploy script)
	  - **Folder:** `/ (root)`
	- Save your changes.


### 2. Build and Export

Run the following commands:

```bash
npm install
npm run build
```

This will generate a static site in the `out/` directory. (Note: `next export` is no longer needed; static export is handled by `next build` when `output: 'export'` is set in `next.config.js`.)

## 3. Deploy

Deploy to GitHub Pages using:

```bash
npm run deploy
```

This uses the `gh-pages` package to push the `out/` directory to the `gh-pages` branch.

## 4. Access Your Site

Visit `https://<your-username>.github.io/wodnd2/` after deployment.

---

For custom repository names or advanced configuration, update `next.config.js` accordingly.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
