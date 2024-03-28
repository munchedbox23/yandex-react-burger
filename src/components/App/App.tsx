import AppHeader from "../AppHeader/AppHeader";
import AppConstructor from "../AppConstructor/AppConstructor";
import { useState, useEffect } from "react";
import { IngredientsContext } from "../../services/ingredientsContext";

function App() {
  const API_URL = "https://norma.nomoreparties.space/api/ingredients";
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setIngredients(data.data);
        } else {
          throw new Error(`Oops! It seems your link ${API_URL} is broken`);
        }
      } catch (error) {
        console.error("Error when executing the request:", error);
      }
    };

    fetchIngredients();
  }, []);
  return (
    <>
      <AppHeader />
      <IngredientsContext.Provider value={{ ingredients }}>
        <AppConstructor />
      </IngredientsContext.Provider>
    </>
  );
}

export default App;
