import { useEffect, useState } from "react";
import { useCart } from "../contexts/cartContext";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi"; 
import { useNavigate } from "react-router-dom"; 

const Products = () => {
    const [products, setProducts] = useState([]);
    const { cart, addToCart } = useCart(); // Get cart count
    const navigate = useNavigate(); 

    const handleCartIconClick = () => {
        navigate("/cart"); 
    };

    useEffect(() => {
        axios.get("http://localhost:5000/products").then(res => setProducts(res.data));
    }, [])

    return (
        <div className="container mx-auto p-6">
            {/* Navbar with Cart Count */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Product List</h2>
                <div className="relative cursor-pointer" onClick={handleCartIconClick}> 
                    <FiShoppingCart className="text-3xl text-gray-700" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </span>
                    )}
                </div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border rounded-lg shadow-md p-4">
                        <img 
                            src={`http://localhost:5000${product.image}`} 
                            alt={product.name} 
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p className="text-gray-600 font-bold">${product.price}</p>
                        <button 
                            onClick={() => addToCart(product)} 
                            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
