import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: '25ch',
    },
}));
const Inputs = ({theme}) => {
    const classes = useStyles();
    console.log(theme)
    return (
        <div className={classes.root}>

            <TextField fullWidth
                       id="outlined-search"
                       label="Автор"
                       type="search"
                       variant="outlined"
                       margin="normal"
            />
            <TextField fullWidth
                       id="outlined-search"
                       label="Назва документа"
                       type="search"
                       variant="outlined"
                       margin="normal"/>

            <Button type={'submit'}
                    variant={'contained'}
                    color={'primary'}>Пошук</Button>
        </div>
    );
};

export default Inputs;
