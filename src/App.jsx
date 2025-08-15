import Navbar from "./components/Navbar";
import Footer from "./components/Footeer";
import RoutesApp from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
  return (
    <>
      <Navbar /> 
      <RoutesApp /> 
      <Footer /> 
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ScrollToTopButton />
    </>
  );
};
export default App;