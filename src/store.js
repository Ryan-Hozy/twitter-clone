import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/features/posts/postsSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
    },
});