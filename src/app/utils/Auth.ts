export const checkIsAuthenticated = () => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo && userInfo !== null) {
    if (JSON.parse(userInfo).token) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};
