import axios from "axios";

export const updateCart = async (id, user, Action) => {
  try {
    const { data } = await axios.post(
      `api/user/cart/${id}`,
      {
        action: {
          type: Action,
        },
      },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Oops caught cart error", error);
  }
};
