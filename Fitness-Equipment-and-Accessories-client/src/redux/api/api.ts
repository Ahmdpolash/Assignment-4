import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/create-product",
          body: data,
        };
      },
      invalidatesTags: ["product"],
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
      providesTags: ["product"],
    }),

    saveOrder: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/order/create-order",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/products/:${id}`,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductsMutation,
  useGetProductsQuery,
  useSaveOrderMutation,
  useDeleteProductMutation,
} = baseApi;
