import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ColorPicker from 'material-ui-color-picker'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Inputs from "./Inputs";
import {ThemeProvider} from "@material-ui/styles";
import Themes from "./Themes";
import {Box, Card, CardContent} from "@material-ui/core";
import Drawers from '../Drawers';
import OutputData from "../OutputData";
import Stats from "../Stats";
import {Route} from "react-router-dom";
import MyList from "../MyList";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Help from "../Help";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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

    }
}));

const Header = ({setCurrentMode, currentMode, handleSwitchMode, handleSwitchColor, theme, colors, currentColor}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleSetCurrentMode = () => {
        setCurrentMode(!currentMode);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box display="flex"
                         justifyContent="space-between"
                         width={"100%"}>
                        <Typography variant="h6" noWrap>
                            E-Library
                        </Typography>
                        {currentMode
                            ? <Brightness7Icon
                                style={{cursor: 'pointer'}}
                                onClick={handleSetCurrentMode}/>
                            : <Brightness4Icon
                                style={{cursor: 'pointer'}}
                                onClick={handleSetCurrentMode}/>}
                    </Box>
                </Toolbar>

            </AppBar>
            <Drawers {...{handleDrawerClose, classes, theme, open}}/>
            <main className={classes.content}>

                <div className={classes.toolbar}/>

                <Route exact path={'/'} render={() => (
                    <>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Inputs {...{theme}}/>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <OutputData/>
                            </CardContent>
                        </Card>
                    </>
                )}/>

                <Route path={'/themes'} render={() => (
                    <Themes {...{handleSwitchMode, handleSwitchColor, colors, currentColor}}/>

                )}/>
                <Route path={'/mylist'} component={MyList}/>

                <Route path={'/stats'} render={() => (
                    <Stats {...{classes}}/>
                )}/>
                <Route path={'/help'} render={() => (
                    <Help {...{classes}}/>
                )}/>

            </main>
        </div>

    );
};

export default Header;
