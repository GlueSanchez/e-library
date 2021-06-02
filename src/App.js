import React, {useState} from 'react';
import 'normalize.css';
import './App.scss';
import Header from "./components/Header/Header";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";


const App = () => {
    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex'
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {

            flexGrow: 1,
            padding: theme.spacing(3),
        },
        cardContent: {
            width: '100%',
            textAlign: 'center',
        },
        chart: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            // maxHeight: '500px',
            // height: '100%'
        }, padding: {
            padding: `0 ${theme.spacing.unit * 2}px`,
        },
    }));
    const [currentMode, setCurrentMode] = useState(true);
    const stateColor = useSelector(state => state.color);
    const theme = createMuiTheme({
        palette: {
            type: currentMode ? 'light' : 'dark',
            primary: {
                main: stateColor.color,
            },
        },
        typography: {
            fontFamily: '"Segoe UI"'
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header {...{
                    useStyles,
                    theme,
                    currentMode, setCurrentMode
                }} />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
