const checkResponse = (response) => {
  return response.ok ? response.json() : response.json().then((error) => Promise.reject(error));
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse).catch((error) => console.error("Error when executing the request:", error));
};

export {checkResponse, request};
