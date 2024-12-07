# Chill Gamer: A Game Review Application

## Project Overview
Chill Gamer is a user-friendly game review platform designed to allow users to explore and share game reviews. With a focus on simplicity and functionality, the application provides an intuitive and "chill" experience for users to engage with game reviews, ratings, and watchlists. This project includes user authentication, review management, and dynamic content features.

### Live Demo
Check out the live website here: [Live Website Link](https://chillgamerbymostafiz.netlify.app/)

## Features

- **🏠 Home Page**: Includes a dynamic banner/slider, highest-rated games section, and additional content sections.
- **📝 Review Management**: Users can add, update, and delete reviews for games, including providing ratings and game details.
- **⭐ Top 5 Reviews**: Displays the highest-rated reviews dynamically.
- **🎮 Game Watchlist**: Users can add games to their personal watchlist from the review details page.
- **🌟 Rating System**: Allows users to rate games (1-5 scale) and showcase ratings given by others.
- **🔐 Authentication**: Email/password-based login, Google/GitHub login options.
- **📱 Responsive Design**: The application is fully responsive across mobile, tablet, and desktop devices.
- **🌑 Theme Toggle**: Users can toggle between dark and light themes.
- **🔍 Search & Filters**: Sort reviews based on rating, year, and genre.

## Key Requirements

### Layout Structure

- **Navbar**:
  - Website name/logo
  - Home, All Reviews, Add Review (Protected), My Reviews (Protected), Game Watchlist (Protected)
  - Login/Register (Conditional)
  - User Avatar (Profile photo with name tooltip)
  - Logout (for logged-in users)

- **Home Page**:
  - Banner with slider (3+ slides with meaningful information)
  - Highest Rated Games section (6 cards with ratings, "Explore Details" button)
  - 2 extra meaningful sections (dynamic data from MongoDB)

- **Footer**: Contains relevant footer information.

### Key Pages

- **Login Page**: Email/password authentication with Google/GitHub login.
- **Register Page**: User registration with email, password, and name.
- **Add Review Page**: Users can submit game reviews (game name, cover image, rating, description, etc.).
- **Review Details Page**: Displays review details with "Add to Watchlist" functionality.
- **All Reviews Page**: Lists all reviews with sorting/filtering options by rating, year, and genre.
- **My Reviews Page**: Private page showing reviews submitted by the logged-in user with update and delete options.
- **Update Review Page**: Allows users to edit previously submitted reviews.
- **Game Watchlist Page**: A private page where users can view/manage games in their personal watchlist.

### Additional Features

- **🚫 404 Page**: A custom "Not Found" page for invalid URLs.
- **🔄 Loading Spinner**: A spinner to show data loading status.
- **🌘 Dark/Light Theme Toggle**: Allows users to switch between dark and light themes.
- **⚙️ Sort & Filter**: Users can sort reviews by rating or year, or filter by genres.

## Technologies Used

- **Frontend**: React.js, CSS, HTML, React Router, Material UI, Daisy UI
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication (Email/Password, Google/GitHub)
- **Hosting**: Firebase, Vercel, Netlify
- **Others**: React Hooks, Context API, Axios, Toast Notifications, etc.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- NPM/Yarn
- MongoDB (for database)


