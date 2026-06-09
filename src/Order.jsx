import { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
  }

  price = intl.format(selectedPizza?.sizes[pizzaSize]);

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order">
      <h2>Create Order Page</h2>
      <form>
        <div>
          <label htmlFor="pizza-type">Pizza Type:</label>
          <select
            onChange={(e) => setPizzaType(e.target.value)}
            name="pizza-type"
            value={pizzaType}
          >
            {pizzaTypes.map((pizza) => (
              <option key={pizza.id} value={pizza.id}>
                {pizza.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pizza-size">Pizza Size:</label>
          <div id="pizza-size">
            <span>
              <input
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="S"
                checked={pizzaSize === "S"}
                id="pizza-s"
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="M"
                checked={pizzaSize === "M"}
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="L"
                checked={pizzaSize === "L"}
                id="pizza-l"
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
          )}
          <p>{price}</p>
        </div>
      </form>
    </div>
  );
}
