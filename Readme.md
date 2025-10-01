# TODO REST API

A simple and scalable ToDo REST API built with Node.js and Express.js for managing tasks. This application provides endpoints for creating, reading, updating, and deleting tasks, with data stored in MongoDB.

## Features

- **CRUD Operations**: Create, read, update, and delete tasks with ease
- **RESTful Architecture**: Clean and intuitive API endpoints following REST principles
- **MongoDB Integration**: Persistent data storage with MongoDB for reliability
- **Input Validation**: Robust validation for incoming requests to ensure data integrity
- **Error Handling**: Comprehensive error handling with meaningful error messages

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast and minimalist web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling tool for Node.js

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- MongoDB (v4.0 or higher) - Local installation or MongoDB Atlas account

## Installation

Follow these steps to get your development environment running:

### 1. Clone the Repository

```bash
git clone git@github.com:costamay/node-js-todoApp.git
cd node-js-todoApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-db
```

**For MongoDB Atlas (cloud database):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo-db
```

### 4. Start MongoDB

If you're running MongoDB locally, start the MongoDB service:

**Linux:**
```bash
sudo systemctl start mongod.service
```

**macOS:**
```bash
brew services start mongodb-community
```

**Windows:**
```bash
net start MongoDB
```

### 5. Run the Application

```bash
npm run dev
```

The server should now be running on `http://localhost:5000`

## API Endpoints

### Todos

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get a specific todos by ID |
| POST | `/api/todos` | Create a new todos |
| PATCH | `/api/todos/:id` | Update a todos by ID |
| DELETE | `/api/todos/:id` | Delete a todos by ID |
| PATCH | `/api/todos/:id/toggle` | toggle complete to either false or true |

## Usage Examples on postman or Thunder client

### Create a New Todo

```
 POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README file",
    "completed": false
  }'
```

### Get All Todos

```
 http://localhost:5000/api/todos
```

### Get a Specific Todo

```
 http://localhost:5000/api/todos/:id
```

### Update a Todo

```
 PATCH http://localhost:5000/api/todos/:id \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "completed": true
  }'
```

### Delete a Todo

```bash
 DELETE http://localhost:5000/api/todos/:id
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Port number for the server | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/todo-db |

### Additional Configuration Options

You can customize the application by modifying the configuration files:

- **Database Settings**: Adjust connection options in your MongoDB configuration
- **CORS Settings**: Configure Cross-Origin Resource Sharing in the Express app
- **Rate Limiting**: Add rate limiting middleware for API protection

## Project Structure

```
node-js-todoApp/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Mongoose schemas and models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware functions
│   └── config/          # Configuration files
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies
└── server.js           # Application entry point
```

## Troubleshooting

### Common Issues

**Issue: MongoDB Connection Error**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Ensure MongoDB is running. Check the service status and start it if needed.

---

**Issue: Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**: Change the PORT in your `.env` file or stop the process using port 5000.

---

**Issue: Module Not Found**
```
Error: Cannot find module 'express'
```
**Solution**: Run `npm install` to ensure all dependencies are installed.

---

**Issue: Environment Variables Not Loading**

**Solution**: Ensure your `.env` file is in the root directory and you're using `dotenv` package to load variables.

### Getting Help

If you encounter any issues not covered here:

1. Check the [Issues](https://github.com/costamay/node-js-todoApp/issues) page on GitHub
2. Review MongoDB and Express.js documentation
3. Open a new issue with detailed information about your problem

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git fork git@github.com:costamay/node-js-todoApp.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Express.js team for the excellent web framework
- MongoDB team for the powerful database solution
- The Node.js community for continuous support and resources

## Contact

For questions or feedback, please contact:

- **Project Maintainer**: [costamay](https://github.com/costamay)
- **Repository**: [node-js-todoApp](https://github.com/costamay/node-js-todoApp)

---

**Happy Coding! 🚀**