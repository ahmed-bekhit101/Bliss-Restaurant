
# 🍽️ Bliss Restaurant – Fullstack Web App

This is a fullstack restaurant application with a **Laravel 12 backend** and a **React/Next.js frontend**.

This guide will help you run the full project **locally** on your machine.

---

## 🔗 Repository

📦 GitHub Repo: [ahmed-bekhit101/Bliss-Restaurant](https://github.com/ahmed-bekhit101/Bliss-Restaurant)

---

## ⚙️ Prerequisites

Before you begin, make sure you have the following installed:

### Backend (Laravel)
- PHP >= 8.1
- Composer
- MySQL (e.g., via XAMPP)
- Git

### Frontend (Next.js)
- Node.js (v18 or higher)
- npm (comes with Node)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ahmed-bekhit101/Bliss-Restaurant.git
cd Bliss-Restaurant
🔧 Backend Setup (Laravel)
bash
Copy
Edit
cd backend
Install dependencies:
bash
Copy
Edit
composer install
Copy environment file:
bash
Copy
Edit
cp .env.example .env
Generate the app key:
bash
Copy
Edit
php artisan key:generate
Set up your MySQL database:
Open MySQL (via XAMPP/phpMyAdmin or CLI) and create a new database:

pgsql
Copy
Edit
Database name: bliss_restaurant
Configure .env:
Edit the .env file and update the database section:

env
Copy
Edit
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bliss_restaurant
DB_USERNAME=root
DB_PASSWORD=    # leave blank if no password in XAMPP
Run the migrations:
bash
Copy
Edit
php artisan migrate
Start the backend server:
bash
Copy
Edit
php artisan serve
You should now have the API running at:

arduino
Copy
Edit
http://localhost:8000
🎨 Frontend Setup (Next.js)
bash
Copy
Edit
cd ../frontend
Install dependencies:
bash
Copy
Edit
npm install
Create environment file:
bash
Copy
Edit
touch .env.local
Add the following to .env.local:

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:8000/api
Start the frontend server:
bash
Copy
Edit
npm run dev
Frontend will be running at:

arduino
Copy
Edit
http://localhost:3000
✅ Summary
Part	URL
Frontend	http://localhost:3000
Backend	http://localhost:8000/api

Make sure the backend is running before starting the frontend!

🐛 Troubleshooting
Make sure MySQL is running in XAMPP.

Check .env files for typos or incorrect database names.

Restart php artisan serve if port 8000 is busy.

If you use a different DB password, update it in .env.
