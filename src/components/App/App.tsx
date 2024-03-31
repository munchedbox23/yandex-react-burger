import AppHeader from "../AppHeader/AppHeader";
import AppConstructor from "../AppConstructor/AppConstructor";
import { useState, useEffect } from "react";
import { IngredientsContext } from "../../services/ingredientsContext";
import { BASE_URL, LOAD_ENDPOINT } from "../../utils/constants";
import { request } from "../../utils/requests";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    request(`${BASE_URL}${LOAD_ENDPOINT}`)
      .then((data) => setIngredients(data.data))
      .catch((error) => console.error("Error fetching ingredients:", error));
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
