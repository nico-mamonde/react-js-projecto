// REACT...
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CONTEXT...
import { CartContextProvider } from "./context/CartContext";

// COMPONENTES... 
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CheckOut } from "./components/CheckOut/ChekOut"


// -----------------------------

const App = () => {




  return (
    <>


      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <main>
            <Routes>

              <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a todos!!!!!!!'} />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />

              {/* error */}
              <Route path="*" element={<h1>Error 404</h1>} />

            </Routes>
          </main>

          <footer>
            <a href="" target="_blank">
             copyright 2024 - Nicolas Mamonde 🛒🎉
            </a>
          </footer>

        </BrowserRouter>
      </CartContextProvider>

    </>
  )
}

export default App
