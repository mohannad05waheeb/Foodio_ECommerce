import { useState } from "react";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); 
    const favorites = useSelector(state => state.favorites);
    const cart = useSelector(state => state.cart);
    const uniqueFavoritesCount = new Set(favorites.map(item => item.id)).size;
    const uniqueCartCount = new Set(cart.map(item => item.id)).size;
    const goHomeAndReload = () => {
        navigate("/");
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };
    return (
        <header className="bg-[#D7261E] flex items-center justify-between px-6 py-4 relative">
            {/* Logo */}
            <div>
                <h1
                    className="text-white font-bold text-2xl cursor-pointer"
                    onClick={goHomeAndReload}
                >
                    FOODIO
                </h1>
            </div>

            {/* Navigation Links (Desktop) */}
            <nav className="hidden md:block flex-1">
                <ul className="text-white flex justify-center gap-4 font-bold text-lg">
                    <Link to="/"><li className="px-3 py-2 rounded-md hover:bg-[#E63946] cursor-pointer">Home</li></Link>
                    <Link to="/pizza"><li className="px-3 py-2 rounded-md hover:bg-[#E63946] cursor-pointer">Pizza</li></Link>
                    <Link to="/burger"><li className="px-3 py-2 rounded-md hover:bg-[#E63946] cursor-pointer">Burger</li></Link>
                    <Link to="/drinks"><li className="px-3 py-2 rounded-md hover:bg-[#E63946] cursor-pointer">Drinks</li></Link>
                    <Link to="/about"><li className="px-3 py-2 rounded-md hover:bg-[#E63946] cursor-pointer">About</li></Link>
                    <Link to="/contact"><li className="px-3 py-2 rounded-md hover:bg-[#E63946] cursor-pointer">Contact</li></Link>
                </ul>
            </nav>

            {/* Icons + Mobile Menu Button */}
            <div className="flex items-center gap-6 relative">
                {/* Favorite Icon */}
                <Link to="/favourite" className="relative">
                    <FaHeart className="text-white text-2xl cursor-pointer" />
                    {uniqueFavoritesCount > 0 && (
                        <span className="absolute -top-2 -right-2  bg-white text-[#D7261E] text-xs font-bold px-2 py-0.5 rounded-full shadow">
                            {uniqueFavoritesCount}
                        </span>
                    )}
                </Link>
                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                    <FaShoppingCart className="text-white text-2xl cursor-pointer" />
                    {uniqueCartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-white text-[#D7261E] text-xs font-bold px-2 py-0.5 rounded-full shadow">
                            {uniqueCartCount}
                        </span>
                    )}
                </Link>
                {/* Mobile Menu Button */}
                <button
                    className="text-white text-2xl md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#D7261E] z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="flex flex-col mt-16 text-white font-bold text-lg gap-4 px-6">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <li className="hover:bg-[#E63946] px-3 py-2 rounded-md cursor-pointer">Home</li>
                    </Link>
                    <Link to="/pizza" onClick={() => setIsMenuOpen(false)}>
                        <li className="hover:bg-[#E63946] px-3 py-2 rounded-md cursor-pointer">Pizza</li>
                    </Link>
                    <Link to="/burger" onClick={() => setIsMenuOpen(false)}>
                        <li className="hover:bg-[#E63946] px-3 py-2 rounded-md cursor-pointer">Burger</li>
                    </Link>
                    <Link to="/drinks" onClick={() => setIsMenuOpen(false)}>
                        <li className="hover:bg-[#E63946] px-3 py-2 rounded-md cursor-pointer">Drinks</li>
                    </Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                        <li className="hover:bg-[#E63946] px-3 py-2 rounded-md cursor-pointer">About</li>
                    </Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        <li className="hover:bg-[#E63946] px-3 py-2 rounded-md cursor-pointer">Contact</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};
export default Navbar;