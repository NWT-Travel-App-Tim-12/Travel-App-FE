const getUser = () => {
  const user = sessionStorage.getItem("USER");
  if (user) return JSON.parse(user)[0];
  return user;
};

const setUser = (user) => sessionStorage.setItem("USER", JSON.stringify(user));

const removeUser = () => sessionStorage.removeItem("USER");

export const Session = {
  getUser,
  setUser,
  removeUser,
};
