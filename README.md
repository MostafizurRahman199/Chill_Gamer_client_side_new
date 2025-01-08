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
