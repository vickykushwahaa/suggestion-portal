# Suggestion Portal

A simple web-based suggestion system built with Node.js, Express.js, and MongoDB. Users can submit their name, email, phone number, and a suggestion. An admin panel—secured with username and password—allows administrators to view and manage submitted suggestions.

## 🚀 Features

- User-friendly form to collect suggestions
- Stores user data in MongoDB
- Admin login with basic authentication
- Admin dashboard to view all suggestions
- Organized project structure with separate front-end and back-end logic

## 🔒 Admin Access

Only authenticated users can access the admin dashboard. Credentials are stored securely using environment variables.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Environment Variables:** Managed with `.env`

## 📁 Folder Structure


suggestion-portal/
├── server.js                 # Main Node.js/Express server file
├── .env                      # Environment variables (not committed to Git)
├── package.json              # NPM dependencies and scripts
├── public/                   # Static frontend files
│   ├── index.html            # User-facing suggestion form
│   ├── login.html            # Admin login page
│   ├── admin.html            # Admin dashboard page
│   └── assets/               # Assets for CSS and JavaScript
│       ├── css/
│       │   ├── style.css     # Styles for user pages
│       │   └── admin.css     # Styles for admin dashboard
│       └── js/
│           ├── main.js       # JS for user suggestion form
│           └── admin.js      # JS for admin dashboard/login


## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/suggestion-portal.git
cd suggestion-portal

Install dependencies
npm install

Set up .env file
Create a .env file in the root with the following variables:
ADMIN_USERNAME=vicky
ADMIN_PASSWORD=vicky123
MONGODB_URI=yourMongoDBConnectionString
PORT=5000

Run the server
node server.js

Open your browser at http://localhost:3000

📌 Future Improvements
Hash admin passwords for better security

Implement session-based authentication

Add client-side and server-side form validation

Export suggestions to CSV

Add logout functionality

📄 License
This project is licensed under the MIT License.

