const login = (username) => {
  localStorage.setItem('state', [JSON.stringify(username)]);
};

const logout = () => {
  localStorage.removeItem('state');
  window.location = '/login';
};

export { login, logout };
