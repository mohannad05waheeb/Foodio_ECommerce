import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../Slices/favoritesSlice";
import { addToCart, removeFromCart } from "../Slices/cartSlice";  
import { toast } from "react-toastify";
export const burgerProducts = [
  { id: 101, name: "Classic Burger", price: "$7", rating: 4.5, image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 102, name: "Cheese Burger", price: "$8", rating: 4.5, image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 103, name: "BBQ Burger", price: "$9", rating: 5, image: "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 104, name: "Veggie Burger", price: "$7", rating: 4, image: "https://images.pexels.com/photos/1199956/pexels-photo-1199956.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 105, name: "Double Beef Burger", price: "$10", rating: 5, image: "https://images.pexels.com/photos/33068075/pexels-photo-33068075.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 106, name: "Chicken Burger", price: "$8", rating: 5, image: "https://images.pexels.com/photos/15662255/pexels-photo-15662255.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 107, name: "Spicy Burger", price: "$9", rating: 4.5, image: "https://images.pexels.com/photos/29851906/pexels-photo-29851906.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 108, name: "Mushroom Burger", price: "$9", rating: 4.5, image: "https://images.pexels.com/photos/5474625/pexels-photo-5474625.jpeg?auto=compress&cs=tinysrgb&w=400" },
]; 
const Burger = () => {
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
      toast.info(`Removed ${product.name}  From Cart!`);
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#D7261E] mb-4">
          Welcome to FOODIO Burgers!
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Taste our juicy burgers made with fresh ingredients. Pick your favorite and enjoy!
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {burgerProducts.map((product) => {
          const isFavorite = favorites.some(item => item.id === product.id);
          const isInCart = cart.some(item => item.id === product.id);
          return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                <Link to={`/burger/${product.id}`} key={product.id}>
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
export default Burger;