# Basic Activity Booking App Backend

This is a simple REST API backend for an activity booking application, built using Node.js, Express.js, and MongoDB.

## Features

- User Registration & Login (with password hashing and JWT authentication)
- List Activities (Public Endpoint)
- Book an Activity (Authorized Users Only)
- Get My Bookings (Authorized Users Only)

## Tech Stack

- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JWT Token-based auth
- Validation: express-validator
- Password Hashing: bcrypt

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/satendragangwar/Activity_booking.git
    cd Activity_booking
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=8080 # or any port you prefer
    MONGODB_URI=<Your MongoDB connection string>
    CORS_ORIGIN=* # Or specific origins, e.g., http://localhost:3000
    ACCESS_TOKEN_SECRET=<Your JWT access token secret>
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=<Your JWT refresh token secret>
    REFRESH_TOKEN_EXPIRY=10d
    ```
    Replace `<Your MongoDB connection string>`, `<Your JWT access token secret>`, and `<Your JWT refresh token secret>` with your actual values.

4.  **Seed the database (Optional but Recommended):**
    To populate the database with sample activities for testing, run:
    ```bash
    npm run seed
    ```

5.  **Run the application:**
    ```bash
    npm start
    ```
    The server should start and listen on the specified port.

## API Endpoints

The base URL for the API is `/api/v1`.

-   `POST /api/v1/users/register` - Register a new user.
-   `POST /api/v1/users/login` - Log in a user and get JWT tokens.
-   `GET /api/v1/activities` - Get a list of all available activities.
-   `POST /api/v1/bookings` - Book an activity (requires authentication).
-   `GET /api/v1/bookings/my-bookings` - Get the logged-in user's bookings (requires authentication).

## API Testing with Postman

Use the provided Postman Collection (`postman_collection.json`) to test the API endpoints.

1.  **Import the collection:**
    *   Open Postman.
    *   Click on the "Import" button in the top left corner.
    *   Select the `postman_collection.json` file from the root of this project.

2.  **Set up Collection Variables:**
    *   Once imported, find the "MeetX Assignment" collection in your workspace.
    *   Click on the ellipsis (...) next to the collection name and select "Edit".
    *   Go to the "Variables" tab.
    *   You will see two collection variables: `baseUrl` and `accessToken`.
    *   The `baseUrl` is pre-configured to `http://localhost:8080/api/v1`. Update this if your API is running on a different address or port.
    *   The `accessToken` variable is initially empty. It will be automatically populated after a successful login request.

3.  **Run the requests:**
    *   Ensure your backend server is running (`npm start`).
    *   Run the requests in the following order:
        *   **Register User:** To create a test user.
        *   **Login User:** To authenticate the user and populate the `accessToken` collection variable.
        *   **List Activities (Public):** To view available activities and get an `activityId` for booking.
        *   **Book Activity (Authorized):** Update the `activityId` in the request body with an ID from the list and send the request. The `accessToken` will be automatically included in the headers.
        *   **Get My Bookings (Authorized):** To view the bookings for the logged-in user. The `accessToken` will be automatically included.

## Project Structure

-   `src/controllers`: Contains the logic for handling requests and interacting with models.
-   `src/models`: Defines the Mongoose schemas and models.
-   `src/routes`: Defines the API routes and links them to controllers.
-   `src/validators`: Contains input validation logic.
-   `src/middlewares`: Contains custom middleware, such as authentication.
-   `src/utils`: Utility functions.
-   `src/db`: Database connection setup.
-   `scripts`: Contains utility scripts, like the database seeder.
