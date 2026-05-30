const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Big Pep",
      description:
        "Mozzarella, a pile of pepperoni, and a sprinkle of oregano.",
    }),

    React.createElement(Pizza, {
      name: "The Veggie",
      description: "Mozzarella, mushrooms, onions, peppers, and olives.",
    }),

    React.createElement(Pizza, {
      name: "The Pineapple Express",
      description: "Mozzarella, ham, pineapple, and a drizzle of honey.",
    }),

    React.createElement(Pizza, {
      name: "The Margherita",
      description: "Mozzarella, tomato sauce, and fresh basil.",
    }),

    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Mozzarella, ham, and pineapple.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
