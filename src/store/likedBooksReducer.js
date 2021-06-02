const likedBooks =
    JSON.parse(localStorage.getItem('watchLaterBooks'));

const likedBooksReducer = (state = likedBooks, action) => {
        switch (action.type) {
            case 'ADD_LIKED_BOOKS': {
                return [...state, ...action.likedBooks]
            }
            case 'DELETE_LIKED_BOOKS': {
                return state.filter(book => book.id !== action.idLikedBook)
            }
            default:
                return state
        }
    }
;

export default likedBooksReducer;