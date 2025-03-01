# Shopping Cart Application

This is a simple **shopping cart application** built using **React/vite (frontend)** and **Node.js/Express (backend)**. The app allows users to browse products, add items to their cart, adjust quantities, and proceed to checkout.

---
## 🚀 Features
- Add a product with name, price, and image
- View a list of products
- Add/remove items from the cart
- Increase/decrease item quantities(managed in frontend alone)
- View cart summary with total price
- Checkout functionality (cart resets after checkout)

---
## 🛠️ Setup Instructions

### **Frontend (React with vite and tailwind css)**
#### **Prerequisites:**
- Ensure you have **Node.js (>= 14.x)** and **npm/yarn** installed.

#### **Installation & Running the Frontend**
```sh
# Clone the repository
git clone https://github.com/gbengeneh55/shopping_cart_candid_project.git
cd shopping_cart/frontend

# Install dependencies
npm install  # or yarn install

# Start the development server
npm run dev  # or yarn dev
```
The frontend runs at **`http://localhost:5173`** (if using Vite)

### **Backend (Node.js/Express)**
#### **Prerequisites:**
- Ensure you have **Node.js (>= 14.x)** installed.

#### **Installation & Running the Backend**
```sh
# Navigate to backend folder
cd ../backend

# Install dependencies
npm install  # or yarn install

# Start the backend server
npm start  # or yarn start
```
The backend runs at **`http://localhost:5000`**.

---
## 📌 API Documentation
### **Base URL:** `http://localhost:5000`

### **📦 Products API**
#### **1️⃣ Get all products**
- **Endpoint:** `GET /products`
- **Response:** Returns a list of available products.
- **Example Response:**
  ```json
  [
    { "id": 1, "name": "Laptop", "price": 999.99, "image": "/images/laptop.png" },
    { "id": 2, "name": "Headphones", "price": 149.99, "image": "/images/headphones.png" }
  ]
#### **1️⃣ Get all products**
- **Endpoint:** `GET /products`
- **Response:** Returns a list of available products.
- **Example Response:**
  ```json
  [
    { "id": 1, "name": "Laptop", "price": 999.99, "image": "/images/laptop.png" },
    { "id": 2, "name": "Headphones", "price": 149.99, "image": "/images/headphones.png" }
  ]
  ```

  #### **1️⃣ upload a product with image**
- **Endpoint:** `POST /products`
- **Post with postman because of the form multipart form header option**
- **Response:** Returns success message and data added.
- **Example Response:**
  ```json
  [
    { "id": 1, "name": "Laptop", "price": 999.99, "image": "/images/laptop.png" },
    { "id": 2, "name": "Headphones", "price": 149.99, "image": "/images/headphones.png" }
  ]

### **🛒 Cart API (Frontend Only for Now)**
Cart management (adding, removing, and updating quantities) is handled on the frontend without a database.



---
## 📌 Author
**Gbenga Emmanuel Famodun**

