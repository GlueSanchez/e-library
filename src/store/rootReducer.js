import {combineReducers} from "redux";
import themeReducer from "./themeReducer";
import colorReducer from "./colorReducer";
import booksReducer from "./booksReducer";
import likedBooksReducer from "./likedBooksReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    color: colorReducer,
    books: booksReducer,
    likedBooks: likedBooksReducer,
});
export default rootReducer;
