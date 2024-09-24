# Food Delivery Website

## Description

This project is a full-stack, responsive food delivery website developed using the MERN stack (MongoDB, Express.js, React, Node.js). The website allows users to browse various food categories, add items to the cart, and make secure online payments through Stripe. An admin panel is also available for managing food items, viewing orders, and updating delivery statuses.***

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Screenshots](#screenshots-and-video)
7. [Admin Panel](#admin-panel)
8. [Contributing](#contributing)
9. [Contact](#contact)

## Features

- **User Authentication:** Login and register functionality using JWT.
- **Food Categorization:** Browse food items by categories like starters, main course, desserts, and beverages.
- **Shopping Cart:** Add food items to the cart and manage them.
- **Product Sorting:** Sort items by price.
- **Payment Gateway:** Secure online payments using Stripe.
- **Order Management:** Users can view their order details and track delivery status.
- **Admin Panel:** Manage food items, view and update order details, and modify delivery statuses.

## Technologies Used

- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JSON Web Token (JWT)
- **Payment Gateway:** Stripe
- **Tools:** Git, GitHub, Visual Studio Code

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB Atlas
- Stripe Account

### Clone the Repository

```
https://github.com/lakshan1946/Food_del.git
```

### Backend Setup

Navigate to the backend directory:
```
cd backend
```
Install backend dependencies:
```
npm install
```
Create a `.env` file in the backend directory and add the following environment variables:
```
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="sk_test_51PSaBcRu1BVIKT9U9P2REkRn1lWST41Yr5qE5KtHayQNL1H24pjOYcnTSgGuhEQ4UFtX5MGKH3uPiBI65HSaMTD200NY75oiJW"
```
Start the backend server:
```
npm start
```

### Frontend Setup

Navigate to the frontend directory:
```
cd frontend
```
Install frontend dependencies:
```
npm install
```
Start the frontend development server:
```
npm run dev
```

### Admin Panel Setup

Navigate to the admin directory:
```
cd admin
```
Install admin dependencies:
```
npm install
```
Start the admin server:
```
npm run dev
```
Access the frontend at `http://localhost:5174`.
Access the admin at `http://localhost:5173`.

## Usage

1. **User Registration and Login:** Register as a new user or log in with an existing account.
2. **Browse Food Items:** Navigate through different food categories like starters, main course, desserts, and beverages.
3. **Add to Cart:** Select food items and add them to your shopping cart.
4. **Checkout:** After adding items to the cart, proceed to checkout and complete the payment using the Stripe gateway.
5. **Order Management:** View your order details and track delivery status.
6. **Admin Panel:** Admin users can log in to the admin panel to add new food items, view orders, and update delivery statuses.

## Project Structure

```
E-COMMERCE/
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── Assets/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
|   ├── upload
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Assets/
│   │   ├── Context/
│   │   ├── Pages/
│   │   ├── main.jsx
│   │   └── main.jsx
├── README.md
└── .gitignore
```

## Screenshots and Video

### Screenshots
![image](https://github.com/user-attachments/assets/d1367776-5408-4622-83d6-fd1bead4352d)
![image](https://github.com/user-attachments/assets/4e794685-afef-4552-9d89-5f5f8a942777)

![image](https://github.com/user-attachments/assets/081a0612-7e24-4c6c-bcaa-1b6877a5e7bb)

## Admin Panel

- **Add Products:** Add new products to the store.
- **View Orders:** View all customer orders.
- **Update Delivery Status:** Modify the delivery status of each order.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Contact
For any inquiries or feedback, feel free to reach out:

- **Email:** lakshan.21@cse.mrt.ac.lk
- **GitHub:** https://github.com/lakshan1946
