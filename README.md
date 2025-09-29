📝 Authenticated Blogs API

A secure and modern API for managing blogs with authentication, built using Node.js, Express.js, and MongoDB. Perfect for full-stack projects and production-ready applications.

🚀 Features

🔐 User Authentication with JWT and Cookies

🗃️ CRUD Operations for Blogs (Create, Read, Update, Delete)

🛡️ Secure Routes - Only logged-in users can add, update, or delete blogs

🌐 JSON API - Easy to integrate with any frontend

⚡ Fast & Lightweight - Built with Express.js and MongoDB

🧩 Error Handling & Validation included

🛠️ Technologies Used

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (jsonwebtoken), Cookie-parser

Middleware & Utilities: Express middleware, async error handling, CORS

Others: Postman (for testing API endpoints)

📌 API Endpoints
Authentication
Method	Endpoint	Description
POST	/login	Login user and get JWT cookie
POST	/register	Register a new user
Blogs
Method	Endpoint	Description
POST	/add	Add a new blog (Authenticated)
GET	/data	Get all blogs (Authenticated)
PUT	/update/:id	Update a blog by ID (Authenticated)
DELETE	/delete/:id	Delete a blog by ID (Authenticated)

⚠️ Note: All blog routes require authentication via JWT stored in cookies.

💻 How to Run Locally

Clone the repository

git clone <your-repo-link>
cd <repo-folder>


Install dependencies

npm install


Create a .env file

PORT=3000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your Secret Key>


Run the server

npm run dev


Test API using Postman or any API client

🖼️ Demo (Optional)

Add screenshots or GIFs of your API responses, e.g., login, creating a blog, reading blogs

🌟 Why This Project is Awesome

Demonstrates real-world authentication & authorization

Shows mastery of Node.js backend and MongoDB

Ready to integrate with any frontend (React, Next.js, etc.)

Perfect portfolio project for job applications

🧑‍💻 About Me

Hi! I’m Rehan Paudel, a passionate backend developer from Nepal 🇳🇵. I love building secure, scalable, and modern web applications.

💼 Open for opportunities in Node.js / MERN Stack development

📧 Email: rehanpoudel2@gmail.com

🙏 Acknowledgements

Special thanks to Node.js & Express.js docs

MongoDB tutorials & JWT guides

Inspirations from modern full-stack projects
