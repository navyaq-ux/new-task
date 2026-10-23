# FlavorHub

A premium, dark-and-gold restaurant homepage built with React, Vite and Tailwind CSS.

## Features

- Cinematic hero with warm pasta photography and a dark-to-image gradient
- Sticky navigation with scroll-spy, smooth scrolling and a responsive mobile menu
- Four-column feature strip
- Popular dishes grid with hover lift, image zoom and a working cart
- Cart drawer with quantity controls, subtotal and demo checkout feedback
- Split-screen About section
- Validated reservation form with a clear demo confirmation message
- Five-image gallery with hover zoom and horizontal scrolling on smaller screens
- Four-column footer with social links and accessible policy dialogs
- Reduced-motion support, keyboard focus states and no horizontal overflow

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide React icons
- Framer Motion animations
- Local photography in `public/images`

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Notes

- Reservation and checkout flows are frontend demos. No booking, payment or order is sent anywhere.
- Restaurant contact details, social destinations and policy copy are placeholders.
- Photography is sourced from Unsplash and stored locally for reliable loading.
