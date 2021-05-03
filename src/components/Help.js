import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, CardContent, TextField} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const Help = ({classes}) => {
    const [movies, setMovies] = useState([]);
    const [inpVal, setInpVal] = useState('');
    let handle = (e) => {
        setInpVal(e.target.value);
        // console.log(e.target.value)
    };

    let request = () => {
        const options = {
            method: 'GET',
            url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
            params: {s: inpVal, page: '1', r: 'json'}, headers: {
                'x-rapidapi-key': 'a659ecedcdmsh6d39b8ebc48bc1ap1db587jsn5be2c9d2dbaa',
                'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
            let getData = response.data.Search;
            console.log(response)
            setMovies([...movies, ...getData]);
            setInpVal('');
        });
    };

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.cardContent}>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Standard" onChange={handle} value={inpVal}/>
                        <Button onClick={request} >Search</Button>
                    </form>
                </CardContent>
            </Card>
            <Button onClick={() => console.log(movies)}>click</Button>
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.cardContent}>

                    {
                        movies.length > 0
                            ? <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Title</StyledTableCell>
                                            <StyledTableCell align="right">Year</StyledTableCell>
                                            <StyledTableCell align="right">Type</StyledTableCell>
                                            <StyledTableCell align="right">imdbID</StyledTableCell>
                                            <StyledTableCell align="right">Poster</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {movies.map((movie) => (
                                            <StyledTableRow key={movie.imdbID}>
                                                <StyledTableCell component="th" scope="row">
                                                    {movie.Title}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{movie.Year}</StyledTableCell>
                                                <StyledTableCell align="right">{movie.Type}</StyledTableCell>
                                                <StyledTableCell align="right">{movie.imdbID}</StyledTableCell>
                                                <StyledTableCell align="center"><img width={100} height={150} src={`${movie.Poster}`} /></StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            : <>Ведіть потрібні значення</>
                    }
                </CardContent>
            </Card>
        </>
    );
};

export default Help;
