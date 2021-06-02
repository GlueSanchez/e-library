const colorReducer = (state = {color: '#000'}, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR': {

            return {
                ...state,
                color: action.color
            }
        }
        default:
            return state
    }
};

export default colorReducer;