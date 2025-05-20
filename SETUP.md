# Setup Guide

This guide provides step-by-step instructions for setting up, configuring, and running the portfolio project.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm or yarn package manager
- Git (optional, for version control)

## Installation

1. Clone the repository (if using Git) or extract the project files to your local machine.

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

### Environment Variables

The project might use environment variables for specific configurations. Create a `.env.local` file in the root directory with the following variables (if needed):

```
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### Tailwind Configuration

The project uses TailwindCSS for styling. The configuration is in `tailwind.config.js`. You can customize:

- Colors
- Fonts
- Breakpoints
- Animations
- Other Tailwind settings

## Running the Project

### Development Mode

To run the project in development mode with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Production Build

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

### Starting Production Server

To start the production server after building:

```bash
npm run start
# or
yarn start
```

## Customization

### Changing Personal Information

1. **Profile Information**: Update your personal information in relevant components:
   - Name and title in `HeroContent.jsx`
   - About information in `About.jsx`
   - Contact details in `Contact.jsx`

2. **Profile Image**: Replace the profile image in the `public/images` directory with your own. Make sure to keep the same filename or update references in the code.

### Updating Projects

To update projects in the portfolio section, edit the `Portfolio.jsx` component:

1. Locate the projects data structure
2. Add, remove, or modify project entries
3. Add project images to the `public/images` directory

### Modifying Colors and Theme

To change the color scheme and theme:

1. Update the color values in `tailwind.config.js`
2. Modify global styles in `src/app/globals.css`

### Changing Fonts

To use different fonts:

1. Import new fonts in `src/app/layout.js` or `globals.css`
2. Update font family references in `tailwind.config.js` 
3. Apply new font classes to components

## Deployment

### Deploying to Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com)
2. Connect your GitHub/GitLab repository or upload the project
3. Configure build settings if needed (usually auto-detected)
4. Deploy

### Other Deployment Options

#### Manual Deployment

1. Build the project using `npm run build`
2. Transfer the `.next` folder, `public` folder, `package.json`, and `next.config.mjs` to your server
3. Run `npm install --production` on the server
4. Start the server using `npm run start`

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Make sure all dependencies are installed
2. Check for syntax errors in your components
3. Verify that all imported modules exist

### Image Loading Issues

If images don't load:

1. Verify that images exist in the correct location
2. Check image paths in components
3. Make sure the image preloading in `ClientApp.jsx` is working correctly

### Styling Problems

If styling doesn't look right:

1. Make sure TailwindCSS is properly installed and configured
2. Check for className typos in components
3. Verify that responsive classes are correct for different screen sizes

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev/)
