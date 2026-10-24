# Green Scent — rebrand concept

A proposed identity and interactive website by **Huzaifa Alahmad**, presented through **Social Vision**.

This is a portfolio concept, not Green Signal's official company website. The company chose to continue its rebranding work with an external agency; this project does not claim final adoption, a client launch or measured commercial results.

The presentation retains the supplied second website archive's design system and named React layout structures: a full-height image hero, product/service mega menus, expanding category cards, a home consultation split, product selection, an atmosphere gallery and day/night themes. English copy is rendered natively, rather than translated through DOM rewriting. Baskerville Old Face and Cambria use locally installed fonts, with serif fallbacks. Font binaries are not redistributed.

## Run

Use Node.js compatible with Vite 8. Install the pinned package dependencies, then run `npm run dev` or `npm run build`. The configured base is `/projects/green-scent/`, for the demonstration hosted inside Social Vision. Production hosting must serve the generated index for each supported concept route.

The local development in this workspace reused an already-installed Vite/React toolchain. `run.mjs` documents that local workflow; normal installations should use the npm scripts and `vite.config.mjs`.

## What works

- Product and service mega menus, mobile navigation and Escape dismissal.
- Product search and category filtering, with an explicit empty state.
- Two referenced product concepts: black ALM Small and 500 ml aroma oil.
- Selection stored as product IDs in this browser; removal and cross-tab updates.
- Separate home and business journeys and six service scopes.
- Local enquiry preparation and text-copy download; nothing is sent automatically.
- Day/night preference and reduced-motion support.

This source is a React port of the supplied visual experience. It does **not** claim to repair the incomplete original Next/vinext hosting adapter. There is no payment, order processing, booking confirmation, inbox backend or CMS.

## Artwork and status

The original integrated Green Scent logo is retained. Product and packaging images show the proposed rebrand. AI-generated home, hospitality and workplace scenes are atmosphere studies, not photographs of completed customer installations. Exact product configuration, fragrance availability, stock, pricing and service terms require direct confirmation.

Artwork, logos and supplied source remain subject to their owners' rights. Publishing this repository is not a grant to reuse the brand assets; no open-source licence is asserted for them.

## Publication boundary

The owner limits publication of this project to **GitHub and Social Vision**. It must not be deployed to the founder's personal portfolio, a new company domain or any other platform without a new instruction.
