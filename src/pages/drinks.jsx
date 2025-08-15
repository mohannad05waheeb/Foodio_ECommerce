import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../Slices/favoritesSlice";
import { addToCart, removeFromCart } from "../Slices/cartSlice";
import { toast } from "react-toastify";
const drinksProducts = [
  { 
    id: 1, 
    name: "Orange Juice", 
    price: "$3", 
    rating: 4.5, 
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 2, 
    name: "Lemonade", 
    price: "$3", 
    rating: 4, 
    image: "https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 3, 
    name: "Iced Coffee", 
    price: "$4", 
    rating: 4.5, 
    image: "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 4, 
    name: "Milkshake", 
    price: "$5", 
    rating: 4.5, 
    image: "https://images.pexels.com/photos/1169004/pexels-photo-1169004.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 5, 
    name: "Green Tea", 
    price: "$2.5", 
    rating: 4, 
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 6, 
    name: "Strawberry Smoothie", 
    price: "$4.5", 
    rating: 4.5, 
    image: "https://images.pexels.com/photos/4443476/pexels-photo-4443476.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 7, 
    name: "Mango Juice", 
    price: "$3.5", 
    rating: 4, 
    image: "https://images.pexels.com/photos/4955257/pexels-photo-4955257.jpeg?auto=compress&cs=tinysrgb&w=400" 
  }, 
  { 
    id: 8, 
    name: "Hot Chocolate", 
    price: "$3.5", 
    rating: 4.5, 
    image: "https://images.pexels.com/photos/2668498/pexels-photo-2668498.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 9, 
    name: "Herbal Tea", 
    price: "$2.5", 
    rating: 4, 
    image: "https://images.pexels.com/photos/1123252/pexels-photo-1123252.jpeg?auto=compress&cs=tinysrgb&w=400" 
  }
];
export { drinksProducts };
const Drinks = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const cart = useSelector(state => state.cart);
    const handleToggleFavorite = (e, product) => {
        e.preventDefault();
        const isFavorite = favorites.some(item => item.id === product.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(product.id));
            toast.info(`Removed ${product.name} from favorites!`);
        } else {
            dispatch(addToFavorites(product));
            toast.success(`Added ${product.name} to favorites!`);
        }
    };
    const handleToggleCart = (e, product) => {
        e.preventDefault();
        const isInCart = cart.some(item => item.id === product.id);

        if (isInCart) {
            dispatch(removeFromCart(product.id));
            toast.info(`Removed ${product.name} from cart!`);
        } else {
            dispatch(addToCart(product));
            toast.success(`Added ${product.name} to cart!`);
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
                <h1 className="text-4xl md:text-5xl font-bold text-[#D7261E] mb-4">Refreshing Drinks Menu</h1>
                <p className="text-gray-700 text-lg max-w-xl mx-auto">
                    Quench your thirst with our refreshing drinks, made from the best ingredients. Pick your favorite and enjoy!
                </p>
            </section>
            <section className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {drinksProducts.map((product) => {
                    const isFavorite = favorites.some(item => item.id === product.id);
                    const isInCart = cart.some(item => item.id === product.id);

                    return (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden" key={product.id}>
                            <div className="relative">
                                <Link to={`/drinks/${product.id}`}>
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
export default Drinks;