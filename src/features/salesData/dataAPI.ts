import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import dataURL from "../../assets/data.json?url"
import type data from "../../assets/data.json"

//Create an Api Slice that only has a reference to the .json file, can be swapped out with the real url
export const dataApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: dataURL }),
  reducerPath: "salesApi",
  endpoints: build => ({
    getSales: build.query<typeof data, void>({
      query: () => ``,
    }),
  }),
})

export const { useGetSalesQuery } = dataApiSlice
