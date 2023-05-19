import axiosInstance from "./axiosInstance";

const getCartId = async (userId: number, token: string) => {
  try {
    const response = await axiosInstance.get("/cart/user", {
      params: {
        userId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Cart = {
  getCartId,
};
