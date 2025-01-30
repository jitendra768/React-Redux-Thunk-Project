import { useState } from "react";

const Recipes = () => {
  const recipess = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini",
      ],
    },
  ];
  const [recipes] = useState(recipess);
  return (
    <div>
      <h3 className="text-lg font-semibold">Recipes Detailes</h3>
      <p>
        {recipes &&
          recipes.map((item, i) => (
            <div key={item.id}>
              <h2>
                {i + 1} {item.name}
                {item.ingredients.map((recipe) => (
                  <li key={recipe}>{recipe}</li>
                ))}
              </h2>
            </div>
          ))}
      </p>
    </div>
  );
};

export default Recipes;
