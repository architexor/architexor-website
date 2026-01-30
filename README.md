# Architexor Website

A modern, responsive React.js portfolio website showcasing architectural design, structural engineering, AEC industry services, AutoCAD/Revit plugin development, BIM software development, and web development services.

## Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Service Showcase**: Comprehensive display of all AEC industry services
- **Contact Form**: Functional contact form for client inquiries
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Professional Layout**: Clean, professional design suitable for an architecture/engineering portfolio

## Services Highlighted

1. **Architectural Design**
   - Interior & Exterior Design
   - Conceptual Design
   - Space Planning
   - 3D Visualization

2. **Structural Engineering**
   - Structural Analysis
   - Foundation Design
   - Seismic Design
   - Building Code Compliance

3. **AEC Industry Services**
   - Project Management
   - BIM Development
   - Cost Estimation
   - Facility Management

4. **AutoCAD & Revit Plugins**
   - Custom Plugin Development
   - Automation Tools
   - Workflow Optimization

5. **BIM Software Development**
   - BIM Model Development
   - Clash Detection
   - 4D/5D BIM

6. **Website Development**
   - Portfolio Websites
   - Web Applications
   - Full-Stack Development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero/Home section
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` to update:
- Email address
- Phone number
- Location

### Modify Services

Edit `src/components/Services.jsx` to add, remove, or modify service categories and items.

### Change Colors

Update CSS variables in `src/index.css`:
- `--primary-color`: Main brand color
- `--accent-color`: Accent color
- `--text-dark`: Dark text color
- `--text-light`: Light text color

### Connect Contact Form

The contact form currently logs to console. To connect it to a backend:

1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Replace the setTimeout with an actual API call
3. Add error handling as needed

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern features (Grid, Flexbox, Animations)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.
