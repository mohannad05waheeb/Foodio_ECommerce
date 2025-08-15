import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-8xl font-bold text-[#D7261E] mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                The page you are looking for does not exist or has been moved.
                You can go back to the homepage.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 bg-[#D7261E] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
                <FaHome /> Go to Home
            </Link>
        </div>
    );
};
export default NotFound;