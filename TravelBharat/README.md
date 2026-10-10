# TravelBharat — Explore India State by State

A responsive tourism discovery website and admin content-management dashboard built with HTML, CSS, JavaScript, Node.js, Express and MongoDB.

## Features
- Browse sample destinations across Indian states and union territories
- Search by destination, city, state, category or description
- Filter by state and travel category
- Destination detail modal with overview, best time, entry guidance, nearby attractions and map link
- Responsive desktop, tablet and mobile layout
- Admin login and protected create, update and delete APIs
- MongoDB persistence, API health endpoint and seed script
- Graceful preview catalogue in the frontend if the API cannot be reached

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- MongoDB Community Server running locally, or a MongoDB Atlas connection string
- VS Code (recommended)

## Run in VS Code
1. Extract the ZIP.
2. Open the extracted `TravelBharat` folder in VS Code.
3. Open Terminal → New Terminal.
4. Install packages:
   ```bash
   npm install
   ```
5. Copy `.env.example` to a new file named `.env`.
6. If MongoDB runs locally, keep:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/travelbharat
   ```
   For MongoDB Atlas, replace it with your Atlas connection string. Never commit `.env`.
7. Set a long private `JWT_SECRET` and change `ADMIN_PASSWORD` in `.env`.
8. Start the app:
   ```bash
   npm run dev
   ```
9. Open **http://localhost:5000** in your browser.
10. In a second terminal (or stop/restart after starting MongoDB), load sample destinations:
    ```bash
    npm run seed
    ```
    Refresh the browser.

## Demo admin login
Default local demo credentials:
- Email: `admin@travelbharat.in`
- Password: `ChangeMe123!`

These defaults are for local demonstration only. Change `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET` in `.env` before deploying. The app's admin login compares the configured credentials; do not expose demo defaults on a public deployment.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health |
| GET | `/api/places` | List destinations; supports `q`, `state`, `city`, `category` query parameters |
| GET | `/api/places/:id` | Destination details |
| POST | `/api/admin/login` | Admin login; returns JWT |
| POST | `/api/places` | Create destination (admin JWT required) |
| PUT | `/api/places/:id` | Update destination (admin JWT required) |
| DELETE | `/api/places/:id` | Delete destination (admin JWT required) |

## Submission checklist
- [ ] Replace demo admin credentials and secret
- [ ] Verify destination descriptions, current fees, hours, seasonal access and image rights
- [ ] Add your name, institution and project mentor to the report if required
- [ ] Test search, filters, detail views, admin CRUD and responsive layout
- [ ] Include screenshots and your deployed demo URL in the final report
- [ ] Do not upload `.env` or `node_modules` to GitHub

## Deployment notes
Deploy the Node/Express server to a Node-capable host (Render or similar) and provision MongoDB Atlas. Set `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` as host environment variables. Set the start command to `npm start`. This app serves its frontend from the same Express server, so the public site and `/api` routes share the same origin.

## Project documentation
### Problem
Tourism information is scattered across multiple sources, making state-wise exploration and travel research unnecessarily difficult.

### Objectives
- Create a central directory of Indian destinations
- Provide structured destination information and discovery filters
- Help users learn about heritage, nature, religious, adventure and coastal destinations
- Enable administrators to maintain destination content

### Scope and constraints
Phase one is informational only. It does not provide bookings, payments, live availability, reviews or itinerary booking. Data shown is sample content for demonstration; manually verify it against official tourism/monument sources before public use.

### Core data entities
- **Tourist Place:** name, state, city, category, description, best time, entry fee, timings, map URL, image URL, nearby attractions and verification status
- **Admin:** configured server-side credentials and signed JWT for protected content management

### Future enhancements
- Interactive India map and map API integration
- Hindi and regional language support
- Itinerary builder
- Official tourism-source links and content review workflow
- Booking and transport integrations in a later phase

## Credits and disclaimer
Prepared as an educational project concept aligned with the TravelBharat brief and the general Incredible India tourism theme. This is not an official Government of India or Incredible India website. Verify all travel information with official sources before relying on it.
