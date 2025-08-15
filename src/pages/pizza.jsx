import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../Slices/favoritesSlice";
import { addToCart, removeFromCart } from "../Slices/cartSlice";
import { toast } from "react-toastify";

const pizzaProducts = [
    {
        id: 1,
        name: "Margherita",
        price: "$8",
        rating: 5,
        image: "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 2,
        name: "Pepperoni",
        price: "$10",
        rating: 4.5,
        image: "https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 3,
        name: "Hawaiian",
        price: "$11",
        rating: 4,
        image: "https://images.pexels.com/photos/14334060/pexels-photo-14334060.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 4,
        name: "BBQ Chicken",
        price: "$12",
        rating: 4.5,
        image: "https://images.pexels.com/photos/14906564/pexels-photo-14906564.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 5,
        name: "Veggie Delight",
        price: "$9",
        rating: 4,
        image: "https://images.pexels.com/photos/5175513/pexels-photo-5175513.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 6,
        name: "Four Cheese",
        price: "$12",
        rating: 5,
        image: "https://images.pexels.com/photos/16586524/pexels-photo-16586524.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 7,
        name: "Meat Lovers",
        price: "$13",
        rating: 4.5,
        image: "https://images.pexels.com/photos/5903173/pexels-photo-5903173.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 8,
        name: "Spinach & Feta",
        price: "$10",
        rating: 4.5,
        image: "https://images.pexels.com/photos/13457624/pexels-photo-13457624.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
];

export { pizzaProducts };

const Pizza = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const cart = useSelector(state => state.cart);  

    const handleToggleFavorite = (e, product) => {
        e.preventDefault();
        const isFavorite = favorites.some(item => item.id === product.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(product.id));
            toast.info(`Removed ${product.name} From Cart!`);
        } else {
            dispatch(addToFavorites(product));
            toast.success(`Added ${product.name} To Cart!`);
        }
    };
    const handleToggleCart = (e, product) => {
        e.preventDefault();
        const isInCart = cart.some(item => item.id === product.id);

        if (isInCart) {
            dispatch(removeFromCart(product.id));
            toast.info(`Removed ${product.name} From Cart!`);
        } else {
            dispatch(addToCart(product));
            toast.success(`Added ${product.name} To Cart!`);
        }
    };
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
        }
        while (stars.length < 5) {
            stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div className="pb-16 bg-gray-100 min-h-screen">
            <section className="py-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#D7261E] mb-4">Welcome to FOODIO Pizza!</h1>
                <p className="text-gray-700 text-lg max-w-xl mx-auto">
                    Enjoy our freshly baked pizzas with the finest ingredients. Choose your favorite and order now!
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pizzaProducts.map((product) => {
                    const isFavorite = favorites.some(item => item.id === product.id);
                    const isInCart = cart.some(item => item.id === product.id);  

                    return (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <Link to={`/pizza/${product.id}`} key={product.id}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-40 object-cover hover:scale-105 duration-300"
                                        loading="lazy"
                                        />
                                    </Link>
                                    <button
                                        onClick={(e) => handleToggleFavorite(e, product)}
                                        className={`absolute top-2 right-2 p-2 rounded-full shadow transition 
                                            ${isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"}`}
                                    >
                                        <FaHeart />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center px-3 pt-3">
                                    <h3 className="text-lg font-bold">{product.name}</h3>
                                    <button
                                        onClick={(e) => handleToggleCart(e, product)}
                                        className={`p-2 rounded-full shadow transition 
                                            ${isInCart ? "bg-green-500 text-white" : "bg-red-500 text-white hover:bg-red-700"}`}
                                    >
                                        <FaShoppingCart />
                                    </button>
                                </div>

                                <div className="flex items-center gap-1 px-3 py-2">
                                    {renderStars(product.rating)}
                                </div>
                                <p className="text-orange-500 font-semibold px-3 pb-3">{product.price}</p>
                            </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Pizza;
