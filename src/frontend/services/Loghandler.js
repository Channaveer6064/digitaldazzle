import axios from "axios";
import { useWishlist } from "../contexts/wishlist-context";
export const LogInHandler = async ({ email, password }, setUser, navigator) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });

    if (status === 200) {
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      localStorage.setItem("user", JSON.stringify(data.foundUser));

      setUser({
        tokenVal: data.encodedToken,
        user: data.foundUser,
        isUserLoggedIn: true,
      });

      navigator("/");
    }
  } catch (error) {
    console.error("Invalid email or password", error);
  }
};

export const LogoutHandler = (setUser) => {
  localStorage.removeItem("token");
  setUser({ isUserLoggedIn: false });
};
