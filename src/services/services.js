const fetchIngredients = async (url, setFunc) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setFunc(data.data);
    } else {
      throw new Error(`Oops! It seems your link ${url} is broken`);
    }
  } catch (error) {
    console.error("Error when executing the request:", error);
  }
};


const postIngredients = async (url, order, postFunc)  => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify({"ingredients": order})
    });

    if(!response.ok) {
      throw new Error(`Oops! It seems your link ${url} is broken`);
    }
    const data = await response.json();
    return postFunc(data);
    
  } catch(error) {
    console.error("Error! It looks like we are unable to send the data, check the correctness of the sent data.", error);
  }
}


export {fetchIngredients, postIngredients};
