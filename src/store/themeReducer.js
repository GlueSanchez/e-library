import theme from "./theme";

const themeReducer = (state = theme, action) => {
    switch (action.type) {
        case 'CHANGE_MODE': {

            return {
                // theme.palette.type:
                // ...state,
                // palette: {
                //     ...state.palette,
                //     type: state.palette.type === 'dark' ? 'light' : 'dark'
                }
            }


        default:
            return state
    }
};

export default themeReducer;

// palette: {
//     type: currentMode ? "dark" : "light",
//         primary: {main: currentColor || "#000"},
//     secondary: {main: '#5cb85c'},
// error: {main: '#f0ad4e'},
// },
