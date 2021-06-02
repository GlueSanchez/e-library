import React from 'react';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListIcon from "@material-ui/icons/List";
import ListItemText from "@material-ui/core/ListItemText";
import {Drawer} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import HelpIcon from '@material-ui/icons/Help';
import {NavLink} from "react-router-dom";

const Drawers = ({handleDrawerClose, classes, open, theme}) => {
    const c = {
        selected: {
            color: 'red',
            backgroundColor: 'red'
        },

        link: {
            textDecoration: 'none',
            color: 'black'
        }
    };
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <Divider/>

            <List>

                <NavLink exact to={'/'}
                         style={c.link}
                         className={'navLink'}
                         activeStyle={{
                             color: theme.palette.success.main,
                         }}>
                    <ListItem button>
                        <ListItemIcon> <HomeIcon /></ListItemIcon>
                        <ListItemText>Пошук </ListItemText>
                    </ListItem>
                </NavLink>

                <NavLink exact to={'/mylist'}
                         style={c.link}
                         className={'navLink'}
                         activeStyle={{
                             color: theme.palette.success.main
                         }}>
                    <ListItem button>
                        <ListItemIcon> <ListIcon/></ListItemIcon>
                        <ListItemText>Переглянути пізніше</ListItemText>
                    </ListItem>
                </NavLink>

                <NavLink exact to={'/stats'}
                         style={c.link}
                         className={'navLink'}
                         activeStyle={{
                             color: theme.palette.success.main
                         }}>
                    <ListItem button>
                        <ListItemIcon> <EqualizerIcon/></ListItemIcon>
                        <ListItemText>Статистика</ListItemText>
                    </ListItem>
                </NavLink>

                {/*<NavLink exact to={'/themes'}*/}
                {/*         style={c.link}*/}
                {/*         className={'navLink'}*/}
                {/*         activeStyle={{*/}
                {/*             color: theme.palette.success.main*/}
                {/*         }}>*/}
                {/*    <ListItem button>*/}
                {/*        <ListItemIcon> <ColorLensIcon/></ListItemIcon>*/}
                {/*        <ListItemText>Themes</ListItemText>*/}
                {/*    </ListItem>*/}
                {/*</NavLink>*/}

                <NavLink exact to={'/help'}
                         style={c.link}
                         className={'navLink'}
                         activeStyle={{
                             color: theme.palette.success.main
                         }}>
                    <ListItem button>
                        <ListItemIcon> <HelpIcon/></ListItemIcon>
                        <ListItemText>Допомога</ListItemText>
                    </ListItem>
                </NavLink>

            </List>
            <Divider/>
        </Drawer>
    );
};

export default Drawers;
