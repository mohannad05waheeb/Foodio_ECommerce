import { FaTags, FaShippingFast, FaStar, FaHeadset } from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Why Choose Us?
        </h2>
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="group bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:bg-orange-500 hover:text-white cursor-pointer">
            <FaTags className="text-orange-500 text-5xl mx-auto mb-4 transition duration-300 group-hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">Competitive Prices</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">
              Get the best quality at the best price.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:bg-orange-500 hover:text-white cursor-pointer">
            <FaShippingFast className="text-orange-500 text-5xl mx-auto mb-4 transition duration-300 group-hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">
              Your order delivered as quickly as possible.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:bg-orange-500 hover:text-white cursor-pointer">
            <FaStar className="text-orange-500 text-5xl mx-auto mb-4 transition duration-300 group-hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">
              Fresh ingredients and unforgettable taste.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:bg-orange-500 hover:text-white cursor-pointer">
            <FaHeadset className="text-orange-500 text-5xl mx-auto mb-4 transition duration-300 group-hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">
              Our team is ready to help anytime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
