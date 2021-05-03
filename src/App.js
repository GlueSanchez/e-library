import React, {useState} from 'react';
import 'normalize.css';
import './App.scss';
import Header from "./components/Header/Header";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const [currentMode, setCurrentMode] = useState(false);
    const [currentColor, setCurrentColor] = useState('#000');

    const theme = createMuiTheme({
        palette: {
            type: currentMode ? "dark" : "light",
            primary: {main: currentColor || "#000"},
        },
    });

    const colors = {
        primary_1: '#ff4950',
        primary_2: '#ff4081',
        primary_3: '#75199b'
    }
    const handleSwitchMode = () => {
        setCurrentMode(!currentMode);
    };
    const handleSwitchColor = (color) => {
        if (color) {
            setCurrentColor(color);
        }
    };
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header {...{setCurrentMode,currentMode,handleSwitchMode, handleSwitchColor, colors, theme, currentColor}}/>

            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
