const checkResponse = (response) => {
  if(!response.ok) {
    throw new Error(`Error when executing the request`)
  }
  return response.json();
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export {checkResponse, request};
