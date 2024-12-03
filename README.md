```markdown:README.md
# Laravel Blog Application

A full-featured blogging platform built with Laravel and Inertia.js, featuring user authentication, post creation with rich text editing, comments, likes, and real-time notifications.

## 🚀 Features

- **User Authentication**
  - Register, Login, Logout functionality
  - Protected routes for authenticated users
  - User profile display

- **Post Management**
  - Create, read, update, and delete posts
  - Rich text editing with TinyMCE
  - Post author attribution
  - Responsive post layout

- **Interactive Features**
  - Like/unlike posts
  - Comment on posts
  - Real-time like and comment counts
  - Toast notifications for user actions

- **Email Notifications**
  - Automated emails for new likes
  - Automated emails for new comments
  - Mailtrap integration for testing

## 🛠️ Tech Stack

- **Backend**
  - Laravel 9.x
  - MySQL Database
  - Laravel Events & Listeners
  - Mailtrap for email testing

- **Frontend**
  - React.js
  - Inertia.js for SPA-like performance
  - TinyMCE for rich text editing
  - React Hot Toast for notifications
  - Tailwind CSS for styling

## 📦 Installation

### Prerequisites
- PHP >= 8.0
- Composer
- Node.js & NPM
- MySQL
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/shishirkhatiwada/laravel-blog.git
cd laravel-blog
```

### Step 2: Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install NPM packages
npm install
```

### Step 3: Environment Setup
```bash
# Create environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### Step 4: Configure Environment Variables
Update your `.env` file with your database and Mailtrap credentials:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password

MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=587
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
MAIL_ENCRYPTION=tls
```

### Step 5: Database Setup
```bash
# Run database migrations
php artisan migrate
```

### Step 6: Start Development Servers
```bash
# Start the Vite development server
npm run dev

# In a separate terminal, start the Laravel development server
php artisan serve
```

Visit `http://localhost:8000` in your browser.

## 🎯 Usage

1. **Registration/Login**
   - Visit the homepage
   - Click Register/Login
   - Fill in the required information

2. **Creating a Post**
   - Click "Create" in the navigation bar
   - Enter post title
   - Use the rich text editor for content
   - Submit the post

3. **Interacting with Posts**
   - Like/unlike posts by clicking the like button
   - Comment on posts using the comment form
   - View notifications for interactions
   - Check email notifications in Mailtrap

## 📁 Project Structure

```
laravel-blog/
├── app/
│   ├── Http/Controllers/    # Controllers
│   ├── Models/             # Eloquent models
│   ├── Events/            # Event classes
│   └── Listeners/         # Event listeners
├── resources/
│   ├── js/               # React components
│   │   ├── Components/   # Reusable components
│   │   ├── Layouts/     # Layout components
│   │   └── Pages/       # Page components
│   └── views/           # Blade templates
└── routes/
    ├── web.php          # Web routes
    └── api.php          # API routes
```

## 🔧 Key Components

- **AuthenticatedLayout.jsx**: Main layout with navigation
- **RichTextEditor.jsx**: TinyMCE integration
- **PostController.php**: Post management logic
- **EventServiceProvider.php**: Event-listener bindings
## 🙏 Acknowledgments

- Laravel Documentation
- Inertia.js Documentation
- - Tailwind CSS Documentation
