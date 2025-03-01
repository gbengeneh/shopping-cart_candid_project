# Shopping Cart Application

This is a simple **shopping cart application** built using **React (frontend)** and **Node.js/Express (backend)**. The app allows users to browse products, add items to their cart, adjust quantities, and proceed to checkout.

---
## 🚀 Features
- View a list of products
- Add/remove items from the cart
- Increase/decrease item quantities
- View cart summary with total price
- Checkout functionality (cart resets after checkout)

---
## 🛠️ Setup Instructions

### **Frontend (React)**
#### **Prerequisites:**
- Ensure you have **Node.js (>= 14.x)** and **npm/yarn** installed.

#### **Installation & Running the Frontend**
```sh
# Clone the repository
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app/frontend

# Install dependencies
npm install  # or yarn install

# Start the development server
npm run dev  # or yarn dev
```
The frontend runs at **`http://localhost:5173`** (if using Vite) or **`http://localhost:3000`** (if using Create React App).

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
  ```

### **🛒 Cart API (Frontend Only for Now)**
Cart management (adding, removing, and updating quantities) is handled on the frontend without a database.

---
## 🎯 Future Improvements
- Implement user authentication (login/register)
- Store cart items in a database
- Process real payments via Stripe/PayPal

---
## 📌 Author
**Gbenga Emmanuel Famodun**

---
## 📜 License
This project is licensed under the MIT License - feel free to modify and use it.

