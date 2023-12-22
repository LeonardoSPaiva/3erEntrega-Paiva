import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout";
import Error from "./components/Error";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={"Listado de productos"} />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="*" element={<Error />} />
                        <Route path="error" element={<Error />} />
                    </Routes>
                    <Footer/>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;