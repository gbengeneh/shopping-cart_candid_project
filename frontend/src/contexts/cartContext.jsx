import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/cart").then(res => setCart(res.data));
    }, []);

    const addToCart = async (product) => {
        await axios.post("http://localhost:5000/cart", { product_id: product.id, quantity: 1 });
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const updateCartQuantity = (id, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
            )
        );
    };

    const removeFromCart = async (id) => {
        await axios.delete(`http://localhost:5000/cart/${id}`);
        setCart(cart.filter(item => item.id !== id));
    };

    const checkout = async () => {
        await axios.post("http://localhost:5000/checkout");
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
