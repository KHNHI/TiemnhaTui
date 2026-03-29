# TiemnhaTui

An e-commerce website for bags and accessories, built with Node.js, Express, MongoDB (Mongoose), and rendered with EJS.

## Overview

- Application style: lightweight MVC monolith (routes -> controllers -> models -> views)
- Backend platform: Express 4
- Database: MongoDB
- Authentication: Passport Local Strategy
- Session: express-session (with optional MongoDB store)
- View engine: EJS

## Core Features

- User sign up, sign in, and sign out
- Email verification by token
- Forgot password flow (sends a new password via email)
- Change password and update account profile
- Product listing with filtering (category, size, price, label)
- Full-text search
- Session-based shopping cart
- Checkout and order history
- Product comments and ratings

## Tech Stack

- Node.js, Express, Mongoose
- Passport, passport-local
- bcryptjs
- express-session, connect-mongodb-session
- EJS
- Nodemailer
- jQuery/Bootstrap (static frontend assets)

## Project Structure

```text
.
├── app.js
├── bin/
│   └── www
├── config/
│   └── passport.js
├── controllers/
│   ├── auth.js
│   ├── product.js
│   └── user.js
├── models/
│   ├── cart.js
│   ├── label.js
│   ├── order.js
│   ├── product.js
│   ├── productCategory.js
│   └── user.js
├── routes/
│   ├── auth.js
│   └── shop.js
├── util/
│   ├── removeAccent.js
│   ├── productCreate.js
│   ├── productCategoryCreate.js
│   ├── labelCreate.js
│   ├── orderCreate.js
│   ├── commentCreate.js
│   └── updateCommentToProduct.js
├── views/
│   ├── *.ejs
│   └── partials/
├── public/
│   ├── images/
│   ├── stylesheets/
│   ├── javascripts/
│   ├── font/
│   ├── external/
│   └── video/
├── package.json
├── .env
└── Procfile
```

## Scripts

```bash
npm start      # node ./bin/www
npm run dev    # nodemon ./bin/www
```

## Local Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create or update .env:

```env
DB="mongodb+srv://<username>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority"
PORT=3002
USE_MEMORY_SESSION=true
```

Variable meanings:

- DB: MongoDB connection string
- PORT: server port
- USE_MEMORY_SESSION:
  - true: skip MongoDB session store for faster local startup
  - false: use MongoDB for sessions and data

### 3) Run the app

```bash
npm run dev
```

Open in browser:

http://localhost:3002

## Request Flow (Summary)

1. Request enters routes
2. Controller handles business logic
3. Model queries MongoDB
4. Controller renders EJS view
5. Server returns HTML response

Important middleware in this app:

- compression
- morgan logger
- body parsers (express.json/urlencoded)
- cookie-parser
- express-session
- passport initialize + session
- connect-flash

## Main Routes

### Shop routes

- GET /
- GET /product/:productId
- GET /products/:productType?/:productChild?
- POST /products/:productType\*?
- POST /product/:productId
- GET /search
- GET /shopping_cart
- GET /add-to-cart/:productId
- GET /modify-cart
- GET /delete-item/:productId
- GET /delete-cart
- GET /add-order
- POST /add-order
- GET /merge-cart

### Auth/User routes

- GET /login
- POST /login
- GET /logout
- GET /create-account
- POST /create-account
- GET /verify-email
- POST /verify-email
- GET /forgot-password
- POST /forgot-password
- GET /change-password
- POST /change-password
- GET /account
- GET /account-change-info
- POST /account-change-info

## Models

- User: account, profile, verification status, persisted cart field
- Product: product metadata, price, stock, labels, comments
- Order: cart snapshot plus shipping info
- productCategory: parent/child category structure
- Label (model file named label.js): label list
- Cart: runtime session cart object

## Images and Static Assets

- Local images are under public/images
- Static files are served via express.static(public)
- Some product images are still loaded from an external host (bros-admin.herokuapp.com)

## Utility and Seed Scripts

The util folder contains data initialization scripts. Notes:

- Several scripts hardcode MongoDB URI values
- Some scripts reference missing models (for example models/comment)
- These scripts should be refactored to use environment variables before production usage

## Security Notes

This project still has issues to address before production:

- Session secret is hardcoded
- SMTP credentials are hardcoded
- DB connection values include sensitive information
- CSRF/rate-limit/input validation is not fully implemented

## Quick Troubleshooting

- App not starting: check npm install and npm run dev
- DB connection error: set USE_MEMORY_SESSION=true for local mode
- Missing images: verify paths under public/images or external image URLs
- EJS include errors: verify all files exist under views/partials

## License

ISC
