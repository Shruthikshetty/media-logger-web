# Media Logger Web

Media Logger Web is a web frontend built with Next.js for logging and exploring media such as movies, shows, and games.

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Language**: TypeScript
- **Styling**: CSS (with PostCSS config present)
- **Package manager / Runtime**: Bun (with `bun.lock`)
- **Tooling**:
  - ESLint (flat config via `eslint.config.mjs`)
  - Prettier (`.prettierrc`, `.prettierignore`)
  - Vitest for unit tests (`vitest.config.ts`, `vitest.setup.ts`, `vitest.shims.d.ts`)
  - Playwright for e2e tests (`playwright.config.ts`, `e2e/`)
  - Storybook (`.storybook/`, `stories/`)

## Project Structure

Top-level structure (non-exhaustive):

- `.storybook/` – Storybook configuration files
- `e2e/` – Playwright end-to-end test files
- `public/` – Static assets served by Next.js
- `src/` – Application source code (Next.js app, components, etc.)
- `stories/` – Storybook stories
- `.gitignore` – Git ignore configuration
- `.prettierignore` / `.prettierrc` – Prettier configuration
- `bun.lock` – Bun lockfile
- `eslint.config.mjs` – ESLint configuration
- `next.config.ts` – Next.js configuration
- `package.json` – Project scripts and dependencies
- `playwright.config.ts` – Playwright configuration
- `postcss.config.mjs` – PostCSS configuration
- `tsconfig.json` – TypeScript configuration
- `vitest.config.ts` / `vitest.setup.ts` / `vitest.shims.d.ts` – Vitest configuration and setup

Here is the folder structure section fully in Markdown, ready to paste into your README

````md
## Folder Structure

The project uses a standard Next.js App Router layout with supporting config, testing, and Storybook folders

```txt
media-logger-web/
├─ .storybook/          # Storybook configuration for UI components.
├─ e2e/                 # Playwright end-to-end tests.
├─ public/              # Static assets served by Next.js.
├─ src/ # Application source.
│ ├─ app/ # Next.js App Router entry (layouts, pages).
│ ├─ components/ # Reusable UI components and tests.
│ └─ constants/ # Shared configuration/constants.
├─ stories/             # Storybook stories.
├─ .gitignore           # Git ignore rules.
├─ .prettierignore      # Files ignored by Prettier.
├─ .prettierrc          # Prettier configuration.
├─ bun.lock             # Bun lockfile.
├─ eslint.config.mjs    # ESLint configuration.
├─ next.config.ts       # Next.js configuration.
├─ package.json         # Project scripts and dependencies.
├─ playwright.config.ts # Playwright configuration.
├─ postcss.config.mjs   # PostCSS configuration.
├─ tsconfig.json        # TypeScript configuration.
├─ vitest.config.ts     # Vitest configuration.
├─ vitest.setup.ts      # Vitest setup file.
└─ vitest.shims.d.ts    # Vitest type shims.
```

## Scripts

Common scripts defined in `package.json` (adjust if you change names later):

- `dev` – Start Next.js development server
- `build` – Build the Next.js app for production
- `start` – Start the production server
- `lint` – Run ESLint
- `test` – Run Vitest test suite
- `test:e2e` – Run Playwright end-to-end tests (name may differ based on your config)

## Running the Project

### Prerequisites

- Node.js or Bun installed
- Package manager of your choice (Bun, npm, pnpm, or yarn)

### Install dependencies

Using Bun (recommended, since `bun.lock` is present):

```bash
bun install

or
npm install
```

or with any other package manager's like  yarn , pnpm etc..

### Start the development server

```bash
bun dev

or
npm run dev
```

Then open http://localhost:3000 in your browser.

### Run unit tests (Vitest)

```bash
bun test

or
npm test
```

### Run e2e tests (Playwright)

```bash
bun test:e2e

or
npm test:e2e
```

### Run Storybook

```bash
bun storybook

or
npm run storybook
```

## Code Formatting and Linting

- ESLint is configured via `eslint.config.mjs` for linting.
- Prettier is configured via `.prettierrc` and `.prettierignore` for code formatting.
````
