import { configureStore } from "@reduxjs/toolkit";
import articlesSliceReducer from "../features/articles.slice";
import wishedArticlesSliceReducer from "../features/wishedArticles.slice";
import basketArticlesSliceReducer from "../features/basketArticles.slice";

export default configureStore({
      reducer: {
                articles: articlesSliceReducer,
                wishedArticles: wishedArticlesSliceReducer,
                basketArticles: basketArticlesSliceReducer
            }

})