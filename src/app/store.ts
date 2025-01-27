import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { dataApiSlice } from "../features/salesData/dataAPI"

const rootReducer = combineSlices(dataApiSlice)

//Set up the store, add required middleware for Api Slice
export const store = configureStore({ reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(dataApiSlice.middleware)
  }
})