import { createContext, useContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext();
const istoken = localStorage.getItem("token") ? true : false;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: istoken,
    tokenVal: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
  });
  const { tokenVal } = user;
  console.log(tokenVal);

  // const SignUpHandler = async (
  //   { firstName, lastName, email, password },
  //   setUser,
  //   navigator
  // ) => {
  //   try {
  //     const { data, status } = await axios.post(`/api/auth/signup`, {
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       password: password,
  //     });
  //     // saving token in the localStorage
  //     if (status === 200) {
  //       localStorage.setItem("token", JSON.stringify(data.encodedToken));
  //       localStorage.setItem("user", JSON.stringify(data.foundUser));

  //       setUser({
  //         tokenVal: JSON.stringify(data.encodedToken),
  //         isUserLoggedIn: true,
  //         user: data.foundUser,
  //       });
  //       console.log(data);
  //       navigator("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const SignUpHandler = async (
    { firstName, lastName, email, password },
    setUser,
    navigator
  ) => {
    try {
      const { data, status } = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      // saving token in the localStorage
      if (status === 201) {
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        localStorage.setItem("user", JSON.stringify(data.foundUser));

        setUser({
          tokenVal: JSON.stringify(data.encodedToken),
          isUserLoggedIn: true,
          user: data.foundUser,
        });
        navigator("/");
      }
    } catch (error) {
      console.log("errorrr", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, setUser, SignUpHandler, tokenVal }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
