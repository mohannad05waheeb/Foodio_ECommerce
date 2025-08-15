import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../Slices/favoritesSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";
const Favorite = () => {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this item?");
        if (confirmDelete) {
          dispatch(removeFromFavorites(id));
        }
      };

    if (favorites.length === 0) {
        return <div className="flex flex-col items-center py-14 bg-gray-50 px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-red-500 text-6xl mb-4"
            >
                <FaHeartBroken />
            </motion.div> 
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-bold text-gray-700 mb-2"
            >
                Your Favorites List is Empty
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-500 text-center max-w-md mb-6"
            >
                Looks like you haven’t added anything yet.
                Start exploring our delicious menu and add items you love!
            </motion.p>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    to="/pizza"
                    className="bg-[#D7261E] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
                >
                    Browse Menu
                </Link>
            </motion.div>
        </div>;
    }
    return (
        <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
                    <h3 className="text-lg font-bold mt-2">{item.name}</h3>
                    <p className="text-orange-500 font-semibold">{item.price}</p>
                    <button
                        onClick={() => handleRemove(item.id)}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};
export default Favorite;