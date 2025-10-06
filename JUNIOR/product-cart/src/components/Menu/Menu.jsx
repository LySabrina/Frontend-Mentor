import { useEffect, useState } from "react";
import data from "../../../data.json";
import "./Menu.scss";
import Card from "/src/components/Card/Card.jsx";

function Menu() {
  const [category, setCategory] = useState("");
  const [items, setItems] = useState(data);

  useEffect(() => {
    if (category != "") {
      if (category == "Show All") {
        setItems(data);
      } else {
        setItems(() => {
          data.filter((element) => {
            if (element.category === category) {
              return element;
            }
          });
        });
      }
    }
  }, [category]);

  function handleChangeCategory(e) {
    const value = e.target.value;
    setCategory(value);
  }
  console.log("items", items);
  return (
    <section className="menu">
      <h1>Desserts</h1>
      <select name="category" id="category" onChange={handleChangeCategory}>
        {data.map((element) => (
          <option value={element.category} key={element.category}>
            {element.category}
          </option>
        ))}
        <option value="all">Show All</option>
      </select>
      <section className="menu__cards">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </section>
    </section>
  );
}
export default Menu;
