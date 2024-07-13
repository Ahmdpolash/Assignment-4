import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
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
        console.log(searchTerm);
        if (searchTerm.category || searchTerm.sorting) {
          //
          if (searchTerm.sorting) {
            params.append("sort", searchTerm.sorting);
          }
          if (searchTerm.category) {
            params.append("category", searchTerm.category);
          }
        }
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
