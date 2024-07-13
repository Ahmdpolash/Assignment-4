import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/create-product",
          body: data,
        };
      },
    }),
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
    }),
  }),
});

export const { useAddProductsMutation, useGetProductsQuery } = baseApi;
