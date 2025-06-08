## React Challenge: Skip Size Page Redesign

### 1. Project Setup

I began the project by scaffolding a new React application with Vite:

```bash
yarn create vite rem-waste-challenge --template react
cd rem-waste-challenge
yarn
git init
git remote add origin <your-public-github-url>
git checkout -b main
```

Next, I added ESLint and Prettier to maintain code quality:

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-react
```

Then, I integrated Tailwind CSS as a Vite plugin following the official guide:

```bash
# Install Tailwind plugin for Vite
yarn add -D tailwindcss @tailwindcss/vite
```

In `vite.config.ts`, I registered the plugin alongside React:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

I modified my `src/index.css` with:

```css
@import "tailwindcss";
```

and imported it in `main.jsx`:

```js
import './index.css'
```

Finally, I added helpful scripts to `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .js,.jsx",
  "format": "prettier --write ."
}
```

---

### 2. Folder Structure

I organized the codebase into clear directories:

```plaintext
src/
├── components/         # Reusable UI components
├── pages/              # Page views
├── hooks/              # Custom hooks (e.g. useFetchSkips.js)
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

---

### 3. Approach

My objective was to completely reimagine the “Choose Your Skip Size” page while keeping its core steps intact. To break away from the existing layout, I focused on:

* **Distinct Visual Hierarchy**: Introduced a hero section with a summary of selected address and waste type before the options.
* **Interactive Selection**: Swapped a traditional grid for a horizontally scrollable carousel of skip options on desktop, and a swipeable list on mobile.
* **Rich Detail**: Enhanced each skip card with expandable sections for more details (dimensions, weight limits) without navigating away.
* **Call-to-Action Emphasis**: Placed a sticky action bar at the bottom with a “Continue” and “Back” button that becomes active upon selection.
* **Maintainable Code**: Modular components with clear responsibilities: `SkipCarousel`, `SkipList`, `SkipDetailsModal`, and `ActionBar`.

**Steps I followed**:

1. Mapped out a new flow: hero → carousel/list → details modal → action bar.
2. Implemented the `HeroInfo` component to confirm user input.
3. Built `SkipCarousel` for desktop and `SkipList` for mobile with smooth swipe behavior.
4. Created `SkipDetailsModal` to show extended information on demand.
5. Added `ActionBar` that sticks to the viewport bottom and guides users forward once a skip is selected.
6. Tested interactions, responsiveness, and accessibility (keyboard/aria) thoroughly.

---

### 4. UI Sketch & Component Plan

1. **HeroInfo**: A full-width banner at the top summarizing address and waste type, with an edit icon to go back.
2. **SkipCarousel / SkipList**:

   * **Desktop**: Horizontal carousel with partial preview of next card, custom arrows, and inertia scrolling.
   * **Mobile**: Vertical swipeable list with drag support.
3. **SkipCard**:

   * Displays skip image, name, base price.
   * Tapping “Details” slides up `SkipDetailsModal`.
4. **SkipDetailsModal**:

   * Overlays the page, showing dimensions, weight, and additional pricing tiers.
   * Close via “X” or swipe down on mobile.
5. **ActionBar**:

   * Fixed at the bottom once a skip is selected.
   * Shows selected skip and a prominent “Next” button.

> *Sketch Note:* I broke the standard grid pattern to create a more engaging experience—using carousels, modals, and a persistent action bar to guide the user through the redesigned flow.\_

---

### 5. Running the Project

To run and build the project, I used these commands:

```bash
# Install dependencies
yarn

# Start the development server
yarn dev

# Build for production
yarn build
```