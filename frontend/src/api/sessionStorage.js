const getUser = () => sessionStorage.getItem("USER");

const setUser = (user) => sessionStorage.setItem("USER", user);

export const Session = {
  getUser,
  setUser,
};
