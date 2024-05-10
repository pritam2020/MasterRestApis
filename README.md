# E-Library API

This is a basic e-library API built using Node.js, MongoDB, and other tools.

## Features

- Allows users to browse and search for books
- Supports user authentication and authorization
- Provides CRUD (Create, Read, Update, Delete) operations for managing books
- Implements role-based access control for users

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens) for authentication
- Express Validator for input validation
- bcrypt.js for password hashing
- Swagger for API documentation

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following variables:

```bash
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

4. start the server

```bash 
npm start
```

## Usage
Access the API documentation using Swagger UI at http://localhost:3000/api-docs
Use tools like Postman or cURL to interact with the API endpoints
Register new users, authenticate, and perform CRUD operations on books

## Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

