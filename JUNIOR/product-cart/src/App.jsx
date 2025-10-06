import { useContext } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Confirm from "./components/Confirm/Confirm.jsx";
import Menu from "./components/Menu/Menu.jsx";
import CartProvider from "./context/CartProvider.jsx";
import ConfirmProvider, { ConfirmContext } from "./context/ConfirmProvider.jsx";
import Content from "./components/Content/Content.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <ConfirmProvider>
          <Content />
        </ConfirmProvider>
      </CartProvider>
    </>
  );
}

export default App;
