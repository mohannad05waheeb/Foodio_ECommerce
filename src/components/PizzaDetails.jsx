import { useState } from "react";
import { useParams } from "react-router-dom";
import { pizzaProducts } from "../pages/pizza";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/cartSlice";
import { toast } from "react-toastify";

const PizzaDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = pizzaProducts.find((p) => p.id === parseInt(id));
    const [isOpen, setIsOpen] = useState(false);

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        toast.success(`Added ${product.name} To Cart!`);
    };

    if (!product) {
        return (
            <div className="text-center py-20 text-gray-700">
                Product not found!
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-6">
            <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 h-[350px] rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setIsOpen(true)}
            />
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-4xl font-bold text-[#D7261E]">{product.name}</h1>
                <p className="text-orange-500 font-semibold text-2xl">{product.price}</p>
                <p className="text-gray-700">
                    Enjoy our delicious {product.name} pizza, freshly baked with high-quality ingredients,
                    golden crispy crust, and a generous layer of melted cheese. Topped with rich,
                    flavorful sauce and the freshest vegetables and meats, every bite will take you
                    on a journey of taste. Perfect for sharing with friends and family or enjoying
                    all to yourself!</p>
                <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-[#D7261E] hover:bg-orange-500 text-white px-6 py-3 rounded transition">
                    Add to Cart
                </button>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-[350px] h-[350px] object-cover rounded-lg"
                        />
                        <button
                            className="absolute top-0 right-1 text-white text-3xl hover:text-red-500 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PizzaDetails; 
