# Components Documentation

This document provides detailed information about each component in the portfolio website project.

## Table of Contents

1. [Layout Components](#layout-components)
2. [Section Components](#section-components)
3. [UI Components](#ui-components)
4. [Utility Components](#utility-components)

## Layout Components

### ClientApp.jsx

The main client-side component that orchestrates the entire application.

**Features:**
- Image preloading for performance optimization
- Manages loading state with PageLoader
- Organizes all main sections of the portfolio

**Usage Example:**
```jsx
// In page.js
import ClientApp from "./components/ClientApp";

export default function Home() {
  return <ClientApp />;
}
```

### Background.jsx

Creates the visual background effect for the website.

**Features:**
- May use Three.js/Vanta for dynamic backgrounds
- Responsive design adapting to different screen sizes

## Section Components

### Navbar.jsx

The navigation component at the top of the page.

**Features:**
- Navigation links to different sections
- Responsive design with mobile menu
- Logo integration

### Hero.jsx

The landing section of the website.

**Structure:**
- Contains Navbar component
- Contains HeroContent component

### HeroContent.jsx

The main content of the hero section.

**Features:**
- Introductory text and call-to-action
- Professional image
- Possibly animated elements

### About.jsx

Section describing skills and professional background.

**Features:**
- Skills showcase with icons
- Professional information
- May include education and experience

### Portfolio.jsx

Showcases projects and work samples.

**Features:**
- Project cards or galleries
- Project descriptions
- Links to live projects or repositories

### Colaboration.jsx

Explains the collaboration process and workflow.

**Features:**
- Step-by-step explanation of working process
- Visual aids for each step
- Benefits of collaboration

### Contact.jsx

Contact information and possibly a contact form.

**Features:**
- Contact details
- Possibly integrated with ContactField for form input
- Social media links

### Footer.jsx

The footer section of the website.

**Features:**
- Copyright information
- Secondary navigation
- Social links
- Credits

## UI Components

### Button.jsx

Reusable button component.

**Props:**
- `children` - Button text or content
- `variant` - Button style variant
- `size` - Button size
- `onClick` - Click handler

**Usage Example:**
```jsx
import Button from '../ui/Button';

<Button variant="primary" size="medium" onClick={handleClick}>
  Contact Me
</Button>
```

### Logo.jsx

The website logo component.

**Features:**
- SVG or image-based logo
- Possibly animated
- Link to homepage

### Label.jsx

Component for section titles and labels.

**Features:**
- Consistent styling for section headers
- Possibly animated or with special styling

### ContactField.jsx

Input field component for the contact form.

**Props:**
- `label` - Field label
- `type` - Input type (text, email, etc.)
- `value` - Current value
- `onChange` - Change handler
- `required` - Whether field is required

## Utility Components

### PageLoader.jsx

Loading screen shown while the site is initializing.

**Features:**
- Visual loading indicator
- Possibly animated
- Shown during image preloading and initial site setup

## Component Relationships

The components are organized in a hierarchical structure:

```
ClientApp
├── Background
├── Hero
│   ├── Navbar
│   │   └── Logo
│   └── HeroContent
├── Label
├── About
├── Portfolio
├── Colaboration
├── Contact
│   └── ContactField
└── Footer
```

## Adding New Components

To add a new component:

1. Create a new file in the appropriate directory (`src/app/components` for section components or `src/app/ui` for UI components)
2. Import and use the component in the relevant parent component
3. Add styling using Tailwind classes or CSS modules

## Modifying Existing Components

When modifying components:

1. Understand the component's role in the overall structure
2. Test changes in different screen sizes for responsive design
3. Ensure animations and interactions work correctly
4. Update this documentation if component behavior or props change significantly
