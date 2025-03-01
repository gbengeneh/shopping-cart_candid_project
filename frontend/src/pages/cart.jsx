import { useCart } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";

import { IoArrowBackCircleSharp } from "react-icons/io5";

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity, checkout } = useCart();
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-6">
            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 mb-4">
                <IoArrowBackCircleSharp className="mr-2" /> Continue Shopping
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="bg-white p-4 shadow-md rounded-lg">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-4 border-b">
                            {/* Item Image */}
                            <img 
                                src={`http://localhost:5000${item.image}`} 
                                alt={item.name} 
                                className="w-20 h-20 object-cover rounded-md"
                            />

                            {/* Item Details */}
                            <div className="flex-1 ml-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600 font-bold">${item.price.toFixed(2)}</p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center">
                                <button 
                                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)} 
                                    className="bg-gray-300 px-3 py-1 rounded-l-md"
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button 
                                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)} 
                                    className="bg-gray-300 px-3 py-1 rounded-r-md"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal */}
                            <p className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>

                            {/* Remove Button */}
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total & Checkout */}
                    <div className="flex justify-between items-center mt-6 text-xl font-bold">
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                        <button 
                            onClick={checkout} 
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
