import Menu from "../Menu/Menu.jsx";
import Cart from "../Cart/Cart.jsx";
import Confirm from "../Confirm/Confirm.jsx";
import { useContext, useEffect } from "react";
import { ConfirmContext } from "src/context/ConfirmProvider.jsx";

export default function Content() {
  return (
    <>
      <Menu />
      <Cart />
      <Confirm />
    </>
  );
}
