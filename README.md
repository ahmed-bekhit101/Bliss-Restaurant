# 🍽️ Restaurant App – Fullstack Project

This is a fullstack restaurant application with a **Laravel backend** and a **React/Next.js frontend**.

This guide will walk you through how to set up and run the project **locally**.

---

## 🧾 Prerequisites

Before getting started, make sure you have the following installed on your machine:

### 🔧 Backend (Laravel)
- PHP 8.1 or higher
- Composer
- MySQL 
- XAMPP (optional for DB)

### ⚙️ Frontend (Next.js)
- Node.js (v18 or higher)
- npm or yarn

---

## 📦 Installation Guide

### 🔁 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/restaurant.git
cd restaurant
🧠 2. Set up the Backend (Laravel)
bash
Copy
Edit
cd backend
Install dependencies:
bash
Copy
Edit
composer install
Copy the example environment file:
bash
Copy
Edit
cp .env.example .env
Generate the application key:
bash
Copy
Edit
php artisan key:generate
Configure your database:
Open .env and set your database connection:

env
Copy
Edit
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=restaurant_db
DB_USERNAME=root
DB_PASSWORD=
💡 You can use XAMPP or Laravel Valet. Create the database manually (e.g., restaurant_db).

Run migrations:
bash
Copy
Edit
php artisan migrate
Start the Laravel backend:
bash
Copy
Edit
php artisan serve
By default, the API will be available at:

arduino
Copy
Edit
http://localhost:8000
💻 3. Set up the Frontend (Next.js)
bash
Copy
Edit
cd ../frontend
Install frontend dependencies:
bash
Copy
Edit
npm install
Create the frontend environment file:
bash
Copy
Edit
touch .env.local
Inside .env.local, add:

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:8000/api
Run the frontend development server:
bash
Copy
Edit
npm run dev
By default, the frontend will run at:

arduino
Copy
Edit
http://localhost:3000
✅ Accessing the App
Backend API: http://localhost:8000/api

Frontend UI: http://localhost:3000

Make sure the backend is running before starting the frontend so that API calls work correctly.

❓ Troubleshooting
If .env or .env.local files are missing or misconfigured, the app will fail to connect to the database or API.

Make sure MySQL is running (via XAMPP or other).

Make sure your backend runs on port 8000 and frontend on 3000 (or adjust accordingly).

📬 Need Help?
Feel free to open an issue in the GitHub repo if something doesn't work!
