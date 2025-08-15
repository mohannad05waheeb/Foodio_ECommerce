import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pizza from './pages/pizza';
import Burger from './pages/burger';
import Drinks from './pages/drinks';
import Contact from './pages/contact';
import About from './pages/about';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';
import NotFound from './pages/NotFound';
import PizzaDetails from './components/pizzaDetails';
import BurgerDetails from './components/BurgerDetails';
import DrinkDetails from "./components/DrinksDetails";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/burger/:id" element={<BurgerDetails />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/drinks/:id" element={<DrinkDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default RoutesApp;