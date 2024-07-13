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
      query: (searchTerm) => {
        const params = new URLSearchParams();
        console.log(params, "1st");
        if (searchTerm) {
          params.append("category", searchTerm);
        }
        console.log(params, "api");
        return {
          method: "GET",
          url: "/products",
          params: params,
        };
      },
    }),
    saveOrder: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/order/create-order",
      }),
    }),
  }),
});

export const {
  useAddProductsMutation,
  useGetProductsQuery,
  useSaveOrderMutation,
} = baseApi;
