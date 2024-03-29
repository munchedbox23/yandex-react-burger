import AppHeader from "../AppHeader/AppHeader";
import AppConstructor from "../AppConstructor/AppConstructor";
import { useState, useEffect } from "react";
import { IngredientsContext } from "../../services/ingredientsContext";
import { fetchIngredients } from "../../services/services";

function App() {
  const API_URL = "https://norma.nomoreparties.space/api/ingredients";
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients(API_URL, setIngredients);
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
