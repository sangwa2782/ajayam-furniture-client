import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducers/gallerySlice";
import { cartReducer } from "./reducers/cartSlice";

const store = configureStore({
    reducer: {
        gallery: gallerySlice,
        cart: cartReducer,
    },
});

export default store;
