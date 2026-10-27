# Horizon Consults

Responsive React / Vite website built around the supplied homepage and services-menu references. Self-hosted Inter fonts; CSS/SVG workflow illustrations; no external image requests, analytics, or animation framework.

## Run

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The development server listens on `0.0.0.0:5173` and accepts preview hosts. Production output is `dist/`. Configure the production host to serve `index.html` for application routes (SPA fallback).

## Content and routes

- Homepage with problem selector, four service tabs, delivery model, case-study grid, governance, alternating process timeline, fractional roles, capabilities, audiences, FAQ and CTA.
- Services overview and all 15 service detail routes, defined in `src/data.js`.
- How We Work, case studies and detail routes, Insights and eight article routes, About, Capabilities, Contact, Book a Call, Privacy, Terms, Cookies and a 404.
- Services mega-menu supports hover/click, outside dismissal and Escape. Mobile navigation shows grouped expandable services.

## Launch dependencies — important

This is a complete navigable frontend, **not a fully integrated live lead-generation system**.

1. Set `VITE_CONTACT_ENDPOINT` using `.env.example` and rebuild. The endpoint must accept JSON POST, validate input, rate-limit abuse, protect personal data and return appropriate HTTP errors. Do not place secrets in Vite environment variables. Test real delivery before launch.
2. The booking page collects preferred availability but does not reserve a slot. Connect an approved scheduling integration or confirmation workflow. No external URL has been invented.
3. Without a configured endpoint, the forms explicitly say the enquiry was **not sent**, preserve entered data, and offer a downloadable copy. They never simulate a successful submission. The success UI is used only after a successful HTTP response.
4. Add verified UK company/contact details. Confirm the legal entity, jurisdiction, retention and processing arrangements and obtain legal review before publishing the notices or enabling live data collection.
5. Replace the clearly labelled illustrative delivery examples with approved client case studies. No client identities, metrics, logos, testimonials, staff, awards or registration details are fabricated.
6. Service-page text follows a shared template; review and tailor the copy to actual agreed offerings. Insight content is original editorial draft copy and should receive publication review.
7. The reference logo is recreated typographically; replace with the official vector logo when available.

## QA

```sh
npx playwright install --with-deps chromium
npm test
```

Eight tests cover desktop (1440) and mobile (390): homepage controls/FAQ, all 15 menu links and Escape, all 39 content routes with one H1 and no horizontal overflow, and contact validation / unavailable-integration states. All eight passed in this environment using a packaged Chromium binary and its required shared libraries. To use a custom installed Chromium binary, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` and any required `LD_LIBRARY_PATH`.

CSS breakpoints cover 1440+, 1280, 1024, 768 and narrow mobile widths. A full manual cross-browser accessibility and visual comparison is still recommended before launch. Passing automated checks is not a claim of pixel-perfect reference parity.
