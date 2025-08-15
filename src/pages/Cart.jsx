import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Slices/cartSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => {
    const priceNum = parseFloat(String(item.price).replace("$", "")) || 0;
    return acc + priceNum * item.quantity;
  }, 0);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      dispatch(removeFromCart(id));
    }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center py-14 bg-gray-50 px-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-orange-500 text-6xl mb-4">
          <FaShoppingCart />
        </motion.div>
        <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-2xl font-bold text-gray-700 mb-2">
          Your Cart is Empty
        </motion.h2>
        <Link to="/pizza" className="bg-[#D7261E] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {cart.map((item) => {
          const priceNum = parseFloat(String(item.price).replace("$", "")) || 0;
          const totalItemPrice = priceNum * item.quantity;

          return (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-2">{item.name}</h3>
              <p className="text-orange-500 font-semibold">{item.price}</p>

              {/* أزرار زيادة/نقص الكمية */}
              <div className="flex items-center gap-3 my-2">
                <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
              </div>

              <p className="text-sm text-gray-700 font-medium">
                Total: ${totalItemPrice.toFixed(2)}
              </p>

              <button onClick={() => handleRemove(item.id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Remove
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* إجمالي السلة */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl font-bold">Total Price:</h2>
        <p className="text-2xl text-[#D7261E] font-bold">${totalPrice.toFixed(2)}</p>
        <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow cursor-pointer hover:bg-green-600 transition">
          Checkout
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
