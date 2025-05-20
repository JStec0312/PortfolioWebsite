# Quick Reference Guide

A quick reference for common tasks and operations in the portfolio project.

## Command Reference

### Project Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

### Git Commands (If Using Git)

| Command | Description |
|---------|-------------|
| `git add .` | Stage all changes |
| `git commit -m "Message"` | Commit staged changes |
| `git push` | Push commits to remote repository |
| `git pull` | Pull latest changes |

## File Locations

### Key Files

| Purpose | File Location |
|---------|---------------|
| Main Page | `src/app/page.js` |
| Client App | `src/app/components/ClientApp.jsx` |
| Global CSS | `src/app/globals.css` |
| Layout | `src/app/layout.js` |
| Tailwind Config | `tailwind.config.js` |

### Component Groups

| Component Type | Directory |
|----------------|-----------|
| Main Components | `src/app/components/` |
| UI Components | `src/app/ui/` |

## Common Tasks

### Adding a New Section

1. Create a new component in `src/app/components/`
2. Import and add it to `ClientApp.jsx`
3. Style using Tailwind classes

Example:
```jsx
// 1. Create NewSection.jsx
import React from 'react';

const NewSection = () => {
  return (
    <section className="my-20 px-4">
      <h2 className="text-3xl font-bold">New Section</h2>
      {/* content */}
    </section>
  );
};

export default NewSection;

// 2. Add to ClientApp.jsx
import NewSection from './NewSection';

// ...inside return statement
<NewSection />
```

### Adding New Images

1. Place image files in `public/images/`
2. Reference in components as `/images/your-image.png`
3. Consider adding to preload list in `ClientApp.jsx` for critical images

### Updating Navigation

Modify the `Navbar.jsx` component to update navigation links:

```jsx
// In Navbar.jsx navigation links section
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#new-section">New Section</a> {/* Added link */}
  {/* other links */}
</nav>
```

### Changing Contact Information

Update the `Contact.jsx` component with your information:

```jsx
// In Contact.jsx contact details section
const contactDetails = {
  email: "your-email@example.com",
  phone: "+1 234 567 890",
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    // other social links
  }
};
```

### Changing Colors

Modify the `tailwind.config.js` file to update color scheme:

```js
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Example: change primary color
        secondary: '#10B981',
        // other colors
      },
    },
  },
  // other config
};
```

## Responsive Breakpoints

| Breakpoint | Class Prefix | Screen Width |
|------------|--------------|-------------|
| Mobile (default) | (none) | < 640px |
| Small | `sm:` | ≥ 640px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |
| Extra Large | `xl:` | ≥ 1280px |
| 2X Large | `2xl:` | ≥ 1536px |

Example usage:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text that changes size based on screen width
</div>
```

## Animation Examples

Using Framer Motion for animations:

```jsx
import { motion } from 'framer-motion';

// Simple fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content that fades in
</motion.div>

// Slide in from bottom
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  Content that slides in from bottom
</motion.div>
```

## Best Practices

- Keep components small and focused on a single responsibility
- Use Tailwind classes for styling
- Follow responsive design principles
- Optimize images before adding them to the project
- Use semantic HTML elements
- Add appropriate alt text to images for accessibility
- Test on multiple devices and browsers
