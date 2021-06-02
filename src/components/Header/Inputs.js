import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    const [searchData, setSearchData] = useState({
        title: '',
        author: '',
        lang: ''
    });
    useEffect(()=>{
        console.log(searchData)
    },[searchData]);
    const dispatch = useDispatch();
    const handleSetTitle = (e) => {
        setSearchData(prevState => {
            return {...prevState, title: e.target.value}
        });
    };
    const handleSetAuthor = (e) => {
        setSearchData(prevState => {
            return {...prevState, author: e.target.value}
        });
    };
    // const handleSetYear = (e) => {
    //     setSearchData(prevState => {
    //         return {...prevState, year: e.target.value}
    //     });
    // };
    const handleSubmit = () => {
        if (searchData.title === '' && searchData.author === '' && searchData.lang === '') return;
        dispatch({type: 'SEARCH_BOOKS', searchData: searchData});
    };
    const handleSetLang =(e)=>{
        setSearchData(prevState => {
            return {...prevState, lang: e.target.value}
        });
    };
    return (
        <div className={classes.root}>

            <TextField fullWidth
                       id="outlined-search"
                       label="Назва документа"
                       type="search"
                       variant="outlined"
                       margin="normal"
                       value={searchData.title}
                       onChange={handleSetTitle}/>
            <TextField fullWidth
                       id="outlined-search"
                       label="Автор"
                       type="search"
                       variant="outlined"
                       margin="normal"
                       value={searchData.author}
                       onChange={handleSetAuthor}/>

            {/*<Box display={'flex'} width={'100%'} justifyContent={'space-between'}>*/}
            {/*    <TextField style={{width: '45%'}}*/}
            {/*               id="outlined-search"*/}
            {/*               label="Рік з"*/}
            {/*               type="search"*/}
            {/*               variant="outlined"*/}
            {/*               margin="normal"*/}
            {/*    />*/}
            {/*    <TextField style={{width: '45%'}}*/}
            {/*               id="outlined-search"*/}
            {/*               label="Рік по"*/}
            {/*               type="search"*/}
            {/*               variant="outlined"*/}
            {/*               margin="normal"*/}
            {/*    />*/}
            {/*</Box>*/}

            <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Мова</InputLabel>
            <Select
                native  fullWidth
                    variant="outlined"
                    labelId="demo-simple-select-outlined-label"
                    id="outlined-search"
                    label="Мова"

                onChange={handleSetLang}
            >
                <option value="" ></option>
                <option value={'ukr'}>Українська</option>
                <option value={'eng'}>Англійська</option>
                <option value={'rus'}>Російська</option>
            </Select>
            </FormControl>
            <Button type={'submit'}
                    variant={'contained'}
                    color={'primary'}
                    onClick={handleSubmit}>Пошук</Button>
        </div>
    );
};

export default Inputs;
