import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";

export const getItemList = createAsyncThunk(
  "item/getItemList",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    const response = await axiosInstance.get("item/list", {
      params: {
        page,
        pageSize,
      },
    });
    return response.data;
  }
);
