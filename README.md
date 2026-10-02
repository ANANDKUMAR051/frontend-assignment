# Tulas International School – Homepage Redesign

A modern responsive homepage redesign for Tulas International School (TIS), built from the assignment brief and the public TIS website as the content reference.

## Tech Stack

- React
- Vite
- Modern CSS
- Intersection Observer for scroll reveals

## Main Features

- Responsive navigation with mobile menu
- Animated hero section
- Scroll progress bar
- Scroll-triggered section reveals
- Campus and facilities presentation
- Activities gallery
- Parent testimonials
- Admissions call to action
- Contact form validation
- Accessible labels, focusable controls and reduced-motion support
- Responsive layouts for desktop, tablet and mobile
- Custom cursor on pointer devices

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Facilities.jsx
│   ├── WhyTIS.jsx
│   ├── Activities.jsx
│   ├── Testimonials.jsx
│   ├── AdmissionsCTA.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── CustomCursor.jsx
│   └── ScrollProgress.jsx
├── data/
│   └── content.js
├── assets/
│   ├── images/
│   └── icons/
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment

The project can be deployed to Vercel, Netlify or GitHub Pages after the production build passes.

## Content

School information is based on the TIS website referenced in the assignment. No backend is used for the contact form.
