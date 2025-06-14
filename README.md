# Password Manager

A simple web-based password manager application that allows users to securely store and manage their passwords.

## Features

- User authentication (login/signup)
- Secure password storage
- Web-based interface using EJS templates
- MongoDB database integration

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS (Embedded JavaScript templates)
- Express Session for authentication

## How to Use

### Prerequisites

- Node.js installed on your computer
- MongoDB installed and running locally
- Git (for cloning the repository)

### Setup Steps

Follow the steps blow to run this application

1. Clone this repository

2. since you have the repo, you need to install its dependencies. So using a terminal, move into the root directory of the project and execute `npm install` to install the dependencies of the Node.js server.

3. This application uses MongoDB as its Database. So make sure you have it installed.

4. Start the application using command:`npm start` or `npm run dev` with auto-restart.

5. Open your browser and go to `http://localhost:3050`

## Project Structure

- `/routes` - Contains all route handlers
- `/views` - Contains EJS template files
- `/middlewares` - Express middlewares
- `/public` - Static files (CSS, JavaScript, images)
- `/utilities` - Helper functions and database configuration

## Contributing

Feel free to submit issues and pull requests to help improve the project.

## License

ISC
