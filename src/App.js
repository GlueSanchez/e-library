import React, {useState} from 'react';
import 'normalize.css';
import './App.scss';
import Header from "./components/Header/Header";
import Inputs from "./components/Header/Inputs";
import Themes from "./components/Header/Themes";
import {ThemeProvider} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import {createMuiTheme} from "@material-ui/core/styles";

function App() {
    const [currentMode, setCurrentMode] = useState(false);
    const [currentColor, setCurrentColor] = useState('#11cb5f');


    const theme = createMuiTheme({
        palette: {
            type: currentMode ? "dark" : "light",
            primary: {main: currentColor}

        },
    });
    const colors = {
        primary_1: '#00bcd4',
        primary_2: '#ff4081',
        primary_3: '#75199b'
    }
    const handleSwitchMode = () => {
        setCurrentMode(!currentMode);
    };
    const handleSwitchColor=(color)=>{
        setCurrentColor(color);
    };
    return (<>   <ThemeProvider theme={theme}>
            <Header/>
            <Inputs/>

            <Button onClick={handleSwitchMode}
                    color={"primary"}>
                Change mode
            </Button>
            <Button onClick={()=>handleSwitchColor(colors.primary_1)}
                    color={currentColor}>
                Change mode
            </Button>
            <Button onClick={()=>handleSwitchColor(colors.primary_2)}
                    color={currentColor}>
                Change mode
            </Button>
            <Button onClick={()=>handleSwitchColor(colors.primary_3)}
                    color={currentColor}>
                Change mode
            </Button>

            <Themes/>
        </ThemeProvider>
        </>
    );
}

export default App;
