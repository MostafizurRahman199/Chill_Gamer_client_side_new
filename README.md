# Chill Gamer: A Game Review Application

## Project Overview
Chill Gamer is a user-friendly game review platform that allows users to explore and share game reviews. With features like user authentication, review management, and dynamic content, it provides an engaging experience for gaming enthusiasts.

### Live Demo
[Check out the live website here](https://chillgamerbymostafiz.netlify.app/)

---

## Features

- **🏠 Home Page**: Includes a dynamic banner/slider, highest-rated games section, and additional content sections.
- **📝 Review Management**: Add, update, and delete reviews with ratings and game details.
- **⭐ Top 5 Reviews**: Displays the highest-rated reviews dynamically.
- **🎮 Game Watchlist**: Add games to a personal watchlist from the review details page.
- **🌟 Rating System**: Rate games (1-5 scale) and view ratings by others.
- **🔐 Authentication**: Email/password login and Google login.
- **📱 Responsive Design**: Fully responsive for mobile, tablet, and desktop devices.
- **🌑 Theme Toggle**: Switch between dark and light themes.
- **🔍 Search & Filters**: Sort reviews by rating, year, and genre.
- **🏆 Top Games Showcase**: Highlights the top-rated games dynamically.
- **💬 My Reviews**: Manage submitted reviews (update and delete options).
- **🚫 404 Page**: Custom "Not Found" page for invalid URLs.
- **🔄 Loading Spinner**: Displays during data loading.
- **⚙️ Sort & Filter**: Sort by rating or year, and filter by genres.

---

## Layout Structure

- **Navbar**:
  - Website name/logo
  - Home, All Reviews, Add Review (Protected), My Reviews (Protected), Game Watchlist (Protected)
  - Login/Register (Conditional)
  - User Avatar (Profile photo with name tooltip)
  - Logout (for logged-in users)

- **Home Page**:
  - Banner with slider (3+ slides with meaningful information)
  - Highest Rated Games section (6 cards with ratings and an "Explore Details" button)
  - Two extra meaningful sections (dynamic data from MongoDB)

- **Footer**: Contains relevant footer information.

---

## Key Pages

- **Login Page**: Email/password authentication with Google/GitHub login.
- **Register Page**: User registration with email, password, and name.
- **Add Review Page**: Submit game reviews (game name, cover image, rating, description, etc.).
- **Review Details Page**: Displays review details with "Add to Watchlist" functionality.
- **All Reviews Page**: Lists all reviews with sorting/filtering options by rating, year, and genre.
- **My Reviews Page**: Private page showing reviews submitted by the logged-in user with update and delete options.
- **Update Review Page**: Allows users to edit previously submitted reviews.
- **Game Watchlist Page**: A private page where users can view/manage games in their personal watchlist.

---

## Technologies Used

- **Frontend**: React.js, CSS, HTML, React Router, Material UI, Daisy UI
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication (Email/Password, Google/GitHub)
- **Hosting**: Firebase, Vercel, Netlify
- **Others**: React Hooks, Context API, Axios, Toast Notifications

---

## Dependencies

### Production Dependencies
The following dependencies are required for the application to run:

- **@material-tailwind/react**: Material Tailwind components for React.
- **aos**: Animate On Scroll library for adding animations.
- **axios**: HTTP client for API requests.
- **firebase**: Backend-as-a-service for authentication, database, and hosting.
- **localforage**: Library for offline storage.
- **lottie-react**: For adding Lottie animations in React.
- **match-sorter**: Utility for filtering and sorting lists.
- **react**: Core library for building the UI.
- **react-copy-to-clipboard**: Enables copy-to-clipboard functionality.
- **react-countup**: Animates counting for numbers in React.
- **react-dom**: React package for working with the DOM.
- **react-fast-marquee**: Scrolling text or image marquee component.
- **react-helmet**: Manage the document head in React.
- **react-hot-toast**: Notifications library for React.
- **react-icons**: Icon library for React.
- **react-intersection-observer**: Tracks elements as they enter or leave the viewport.
- **react-router-dom**: Client-side routing library for React.
- **react-simple-typewriter**: Typewriter animation for React.
- **react-toastify**: Notifications library for React.
- **react-tooltip**: Tooltip library for React.
- **sort-by**: Utility for sorting arrays by property.
- **sweetalert2**: Beautiful, responsive, customizable JavaScript alert library.
- **swiper**: Modern touch slider for React.
- **use-dark-mode**: Hook for managing dark mode in React.

### Dev Dependencies
The following dependencies are required for development purposes:

- **@eslint/js**: ESLint configuration as a module.
- **@types/react**: TypeScript type definitions for React.
- **@types/react-dom**: TypeScript type definitions for React DOM.
- **@vitejs/plugin-react**: React plugin for Vite.
- **autoprefixer**: Adds vendor prefixes to CSS rules.
- **daisyui**: Tailwind CSS components for UI styling.
- **eslint**: Linting tool for JavaScript.
- **eslint-plugin-react**: React-specific linting rules for ESLint.
- **eslint-plugin-react-hooks**: Additional React Hooks linting rules for ESLint.
- **eslint-plugin-react-refresh**: React Refresh plugin for ESLint.
- **globals**: Provides a list of global variables.
- **postcss**: A tool for transforming CSS with JavaScript.
- **tailwindcss**: Utility-first CSS framework for styling.
- **vite**: Fast and modern front-end build tool.

---

## Installation

### Prerequisites

- **Node.js**: v16 or higher
- **NPM/Yarn**: Latest version
- **MongoDB**: For database management

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chill-gamer.git
   cd chill-gamer


2. Install NPM:
   - Added proper Markdown syntax for `npm install` using:
     ```bash
     npm install
     ```
   - This ensures consistency with the other steps.

3. Verified Formatting:
   - All commands are now enclosed in `bash` code blocks.
   - The `.env` file variables are properly formatted with `env` syntax.
