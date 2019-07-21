const TOKEN_NAME = "user";

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_NAME);
};

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_NAME);
};

export const setToken = token => {
  window.localStorage.setItem(TOKEN_NAME, token);
};

export default { deleteToken, getToken, setToken};
