# Portfolio Website Documentation

This document provides detailed information about the structure, components, and functionality of the portfolio website project.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Components](#components)
4. [Styling](#styling)
5. [Deployment](#deployment)
6. [Adding Content](#adding-content)
7. [Troubleshooting](#troubleshooting)

## Project Overview

This portfolio website is built using Next.js and follows the App Router structure. It features a modern, responsive design with smooth animations and interactive elements. The site includes sections for showcasing skills, projects, collaboration process, and contact information.

## Project Structure

The project follows the Next.js App Router directory structure:

```
src/
├── app/                  # Main application directory for Next.js App Router
│   ├── components/       # Components used throughout the app
│   ├── ui/               # Reusable UI components
│   ├── globals.css       # Global CSS styles
│   ├── layout.js         # Root layout component
│   └── page.js           # Home page component
├── components/           # Legacy components (appears to be duplicated)
├── lib/                  # Utility functions and libraries
├── ui/                   # Legacy UI components (appears to be duplicated)
└── favicon.ico           # Website favicon
```

**Notes on Structure:**
- There are duplicate component directories (`src/app/components` and `src/components`) - the active one is in the `src/app` directory, as seen in the main page import.
- The project uses the newer Next.js App Router architecture.

## Components

### Main Components

#### ClientApp.jsx
The main client-side component that orchestrates the rendering of all sections. It includes:
- Image preloading mechanism
- Loading state management
- Structure for all main sections

#### Background.jsx
Manages the background visual effects of the site.

#### Hero.jsx
The landing section of the website, consisting of:
- Navigation bar
- Hero content with introduction

#### About.jsx
Section that highlights skills and expertise.

#### Portfolio.jsx
Showcases projects and works.

#### Colaboration.jsx
Explains the collaboration process and workflow.

#### Contact.jsx
Contact information and form.

### UI Components

#### Button.jsx
Reusable button component with different styles and states.

#### Logo.jsx
The website logo component.

#### Label.jsx
Component for section labels and headings.

#### PageLoader.jsx
Loading screen shown during initial page load.

## Styling

The project uses:
- **TailwindCSS**: For responsive design and styling
- **Framer Motion**: For animations and transitions
- **CSS Modules**: For component-specific styling

### Tailwind Configuration

Tailwind is configured in `tailwind.config.js` and includes custom colors, fonts, and breakpoints specific to this project.

## Deployment

The project can be deployed using Vercel (recommended for Next.js projects) or any other hosting service that supports Node.js applications.

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### Starting Production Server

```bash
npm run start
```

This will start the production server on port 3000 (default).

## Adding Content

### Adding a New Project

To add a new project to the Portfolio section:

1. Locate the `Portfolio.jsx` component
2. Add a new project object to the projects array/data
3. Include project details such as title, description, image, and links

### Modifying Skills

To update your skills in the About section:

1. Locate the `About.jsx` component
2. Modify the skills data structure
3. Ensure any new skill icons are added to the public/images directory

### Updating Contact Information

To update contact information:

1. Locate the `Contact.jsx` component
2. Update the contact details (email, phone, social links)

## Troubleshooting

### Common Issues

#### Images Not Loading
- Ensure images are correctly placed in the `public/images` directory
- Check that image paths in components are correct
- Verify that the image preloader in ClientApp.jsx includes all critical images

#### Animation Issues
- Check Framer Motion dependencies and versions
- Ensure animations are properly configured for different device sizes

#### Layout Problems on Specific Devices
- Test on various screen sizes using browser developer tools
- Adjust responsive Tailwind classes as needed

### Development Tips

- Use `npm run dev` for development with hot reloading
- Check browser console for any JavaScript errors
- Use React DevTools to inspect component structure and state
