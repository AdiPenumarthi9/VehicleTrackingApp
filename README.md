Vehicle Tracker Web Application
Overview
This project is a web-based vehicle tracking system that visualizes vehicle movement on a map in real time. It displays the route, current vehicle position, elapsed steps, speed, and stop information with a clean UI optimized for both desktop and mobile views. The map uses Leaflet with OpenStreetMap tiles, and the front end is built with React and Tailwind CSS for responsive styling.


Features
Real-time vehicle position tracking on an interactive Leaflet map.

Visualization of route with differentiated colors for completed and pending segments.

Dynamic display of vehicle speed.

Responsive UI with play/pause controls, metadata panel, and stop timeline.

Fully responsive layout optimized for desktop (side-by-side) and mobile (stacked column) views.

Custom vehicle marker icon with speed tooltip.

Route progress indicated through a vertical stop timeline with color-coded status.

Technology Stack
React 19 - Frontend framework for UI.

Leaflet 1.9 and react-leaflet 5.0 - For interactive map displays.

Tailwind CSS 4.1 - Utility-first CSS for styling and responsive layout.

Vite - Build tool and dev server for fast development experience.

JavaScript ES Modules - Modern JavaScript module syntax.

React Icons - For UI control icons.

Fetch API - To load dummy route data from JSON.

Custom hooks and state management - For controlling playback and updating UI.

Project Structure
text
/src
  /components
    MapView.jsx        # Leaflet map displaying route and vehicle marker
    Controls.jsx       # Play/Pause, Reset buttons with icon-based UI
    Metadata.jsx       # Current stop, coordinates, elapsed steps, timestamp display
    Chart.jsx          # Vertical stop timeline showing trip progress
    speedCalculator.js # Utility to calculate vehicle speed
  App.jsx              # Main application component managing state and layout
  app.css              # Tailwind imports and custom global styles
public/
  dummy-route.json     # Static JSON file simulating location data
Getting Started
Prerequisites
Node.js >=16 recommended

npm >=8 recommended

Internet connection to fetch OpenStreetMap tiles

Installation
Clone the repository:

text
git clone <repository-url>
cd vehicle-tracker-webapp
Install dependencies:

text
npm install
Start development server:

text
npm run dev
Access the app in your browser at:

text
http://localhost:3000
Tailwind CSS Setup
Tailwind CSS is installed as a dev dependency.

The tailwind.config.js defines content paths to scan JSX files.

The CSS file imports Tailwind directives: @tailwind base; @tailwind components; @tailwind utilities;

Layout uses Tailwind's responsive utilities for mobile-first and desktop responsive design.

Usage
Use Play/Pause button to start/stop the vehicle simulation along the route.

The vehicle marker moves on the map with a speed tooltip showing real-time calculated speed.

The route line changes color: green for completed path, blue for remaining.

Below the map, stops are visualized in a vertical timeline with color-coded status (completed/current/upcoming).

Metadata panel shows current stop info and timestamp.

Responsive layouts ensure usability on phones by stacking components vertically.

Extending the Project
Integrate live GPS data feed instead of static JSON.

Add authentication and multi-vehicle tracking.

Implement notifications or alerts for geofence crossings.
Enhance map styling or enable historical playback controls.

Include server backend for data persistence and API endpoints.