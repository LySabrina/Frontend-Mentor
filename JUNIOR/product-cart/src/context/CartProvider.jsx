import { Children, createContext, useState } from "react";

/**
 * Why do we need a react component (jsx function)? Why can't we do:
 * const [items, setItems] = useState([])
 * const CartContext = createContext([])
 * 
 * Because useState can not be top level.
 * 
    So if we want to useState and update it then:
    function App() {
  const [items, setItems] = useState([]);
 const CartContext = createContext();
  const addToCart = (item) => setItems((prev) => [...prev, item]);

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      <YourRoutes />
    </CartContext.Provider>
  );
}
  Where we have useState and useContext inside a single React function. 
  Althought this work, now App.jsx is interwined with CartContext so its not reusable nor clean
 * 
 */
const CartContext = createContext([]); //creates a context object (just JS object)

/**
 * interface Item{
 *    name: string,
 *    price: number,
 *    amount: number
 * }
 */

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]); //returns an array with 2 items

  function updateItem(item, type) {
    switch (type) {
      case "increment":
        setItems(() => {
          return items.map((element) => {
            // this compares the object address, not the properties
            // if (element == item) {
            //   element.amount += 1;
            // }
            if (JSON.stringify(element) === JSON.stringify(item)) {
              element.amount += 1;
            }

            return element;
          });
        });

        break;

      case "decrement":
        if (item.amount - 1 == 0) {
          console.log("is right?");
          return removeItem(item);
        } else {
          setItems(() => {
            return items.map((element) => {
              if (JSON.stringify(element) === JSON.stringify(item)) {
                element.amount -= 1;
              }
              return element;
            });
          });
        }
    }
  }
  function addItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function removeItem(item) {
    console.log("item", item);
    setItems((prevItems) => {
      const filterd = prevItems.filter(
        (element) => JSON.stringify(element) != JSON.stringify(item)
      );
      console.log("filter", filterd);
      return prevItems.filter(
        (element) => JSON.stringify(element) != JSON.stringify(item)
      );
    });
  }

  function clearCart() {
    setItems([]);
  }
  return (
    <CartContext.Provider
      value={{ items, addItem, updateItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
