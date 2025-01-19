# IMBD Movies SPA

This is a Single Page Application (SPA) built with **Next.js 15** for listing and viewing movie details. The application integrates with the **OMDb API** to fetch movie data, allowing users to search for movies, view movie details, and filter by year, type (movie/TV series/episode), and more.

On the homepage, movies are listed, and this page works with Client-Side Rendering (CSR). When a user clicks on a movie in the data grid, a new URL in the format `/movie/{title-slug}/{imdb-id}` is opened, which is rendered Server-Side (SSR) to display the movie details. This setup provides both CSR and SSR examples in the project.

## Features

- **Movie Listing Table**: Displays a list of movies with their name, release date, and IMDb ID.
- **Pagination**: Allows users to view 10 movies per page.
- **Search Functionality**: A search bar to filter movies by name (with "Pokemon" as the default search on page load).
- **Filter by Year**: Users can filter movies based on the year they were released.
- **Type Filtering**: Users can choose to filter by movie, TV series, or TV series episodes.
- **Movie Details Page**: Clicking on a movie redirects to a new page with detailed information, including poster, title, duration, genre, director, cast, IMDb rating, etc.

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm**

### Steps

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your .env.local file for the OMDb API key:

   Create a file named .env in the root of your project and add your OMDb API key:

   ```env
   NEXT_PUBLIC_OMDB_API_KEY=<your-api-key>
   NEXT_PUBLIC_MUI_X_LICENSE_KEY= <your-mui-x-licence-key>
   ```

4. Run the application locally:

   ```bash
   npm run dev
   ```

   The application will be running at http://localhost:3000.

### Available Scripts

In the project directory, you can run the following commands:

- **npm run dev** : Starts the development server at http://localhost:3000.
- **npm run build** : Builds the application for production.
- **npm run start** : Starts the production server after building the project.
- **npm run lint** : Lints the codebase using Next.js's built-in linting.

### Technologies Used

- **React:** The front-end framework used to build the SPA.
- **Next.js 15:** Framework for server-side rendering and static site generation.
- **TypeScript:** Type-safe JavaScript (Optional, but used for better development experience).
- **OMDb API:** Used for fetching movie information.
- **SCSS/SASS:** Custom styling for the project.
- **Material UI:** For UI components and styling.
- **@mui/x-data-grid-pro:** Used for advanced data grid functionality. To use the Pro features, a Pro license must be purchased, and the license key should be added to the project. However, in the development environment, the application will still work without the key, though a message will be displayed on the screen indicating that a "MUI X Missing license key".
