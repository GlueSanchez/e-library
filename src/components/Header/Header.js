import React, {useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Inputs from "./Inputs";
import {Box, Card, CardContent} from "@material-ui/core";
import Drawers from '../Drawers';
import OutputData from "../OutputData";
import Stats from "../Stats";
import {Route} from "react-router-dom";
import MyList from "../MyList";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Help from "../Help";
import ColorChangerContainer from "../ColorChangerContainer";


const Header = ({
                    useStyles,
                    theme,
                    currentMode,
                    setCurrentMode
                }) => {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
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
                         width={"100%"}
                         alignItems={'center'}>
                        <Typography variant="h6" noWrap>
                            Електронний каталог
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                            <ColorChangerContainer/>
                            {currentMode
                                ? <Brightness4Icon
                                    style={{cursor: 'pointer'}}
                                    onClick={handleSetCurrentMode}/>
                                : <Brightness7Icon
                                    style={{cursor: 'pointer'}}
                                    onClick={handleSetCurrentMode}/>}
                        </div>
                    </Box>
                </Toolbar>

            </AppBar>
            <Drawers {...{handleDrawerClose, classes, theme, open}}/>
            <main className={classes.content}>

                <div className={classes.toolbar}/>

                <Route exact path={'/'} render={() => (
                    <>
                        <h2>Пошук</h2>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Inputs {...{theme}}/>
                            </CardContent>
                        </Card>

                        <h2>Вихідні дані</h2>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <OutputData {...{theme}}/>
                            </CardContent>
                        </Card>
                    </>
                )}/>

                {/*<Route path={'/themes'} render={() => (*/}
                {/*    <Themes {...{handleSwitchMode, handleSwitchColor, colors, currentColor}}/>*/}

                {/*)}/>*/}
                <Route path={'/mylist'} render={() => (
                    <MyList {...{theme}}/>
                )}/>

                <Route path={'/stats'} render={() => (
                    <Stats {...{classes, theme}}/>
                )}/>
                <Route path={'/help'} render={() => (
                    <Help {...{classes}}/>
                )}/>

            </main>
        </div>
    );
};

export default Header;
