import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#8B1A1A] text-[#F5F5F5] py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold mb-3 cursor-pointer text-[#FFA07A]">FOODIO</h1>
          <p className="text-sm md:text-base">
            Delivering your favorite meals fast and fresh. Enjoy your food anytime, anywhere!
          </p>
        </div>
        {/* Quick Links */}
        <div className="md:text-center">
          <h2 className="font-bold text-lg mb-3 text-[#FFAD60]">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <Link to="/"><li className="hover:text-[#FF6B6B] cursor-pointer">Home</li></Link>
            <Link to="/pizza"><li className="hover:text-[#FF6B6B] cursor-pointer">Pizza</li></Link>
            <Link to="/burger"><li className="hover:text-[#FF6B6B] cursor-pointer">Burger</li></Link>
            <Link to="/drinks"><li className="hover:text-[#FF6B6B] cursor-pointer">Drinks</li></Link>
            <Link to="/about"><li className="hover:text-[#FF6B6B] cursor-pointer">About</li></Link>
            <Link to="/contact"><li className="hover:text-[#FF6B6B] cursor-pointer">Contact</li></Link>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-[#FFAD60]">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#FF6B6B] transition-colors duration-300" target="_blank"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#FF6B6B] transition-colors duration-300" target="_blank"><FaInstagram /></a>
            <a href="#" className="hover:text-[#FF6B6B] transition-colors duration-300" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#FF6B6B] pt-4 text-center text-sm md:text-base text-gray-200">
        Made with ❤️ and ☕ by <Link to="https://www.linkedin.com/in/mohannad-waheeb-660501319/" target="_blank">Mohannad</Link> © {new Date().getFullYear()}
      </div>
    </footer>
  );
};
export default Footer;