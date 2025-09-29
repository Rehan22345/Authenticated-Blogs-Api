# 📝 Authenticated Blogs API

> A secure and modern API for managing blogs with authentication, built using **Node.js**, **Express.js**, and **MongoDB**. Perfect for full-stack projects and production-ready applications.  

---

## 🚀 Features

- 🔐 **User Authentication** with JWT and Cookies  
- 🗃️ **CRUD Operations** for Blogs (Create, Read, Update, Delete)  
- 🛡️ **Secure Routes** - Only logged-in users can add, update, or delete blogs  
- 🌐 **JSON API** - Easy to integrate with any frontend  
- ⚡ **Fast & Lightweight** - Built with Express.js and MongoDB  
- 🧩 **Error Handling** & Validation included  

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (jsonwebtoken), Cookie-parser  
- **Middleware & Utilities**: Express middleware, async error handling, CORS  
- **Others**: Postman (for testing API endpoints)  

---

## 📌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/login`  | Login user and get JWT cookie |
| POST   | `/register` | Register a new user |

### Blogs
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/add`   | Add a new blog (Authenticated) |
| GET    | `/data`  | Get all blogs (Authenticated) |
| PUT    | `/update/:id` | Update a blog by ID (Authenticated) |
| DELETE | `/delete/:id` | Delete a blog by ID (Authenticated) |

> ⚠️ **Note:** All blog routes require authentication via JWT stored in cookies.  

---


