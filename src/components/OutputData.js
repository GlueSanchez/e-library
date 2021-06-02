import React, {useEffect, useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import SearchTableRows from "./SearchTableRows";
import Notification from "./Notification";

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

const useStyles = makeStyles({
    table: {
        width: '100%',
    },
});
const OutputData = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const books = useSelector((state) => state.books.searchedBook);
    const likedBooks = useSelector(state => state.likedBooks);
    const [notify, setNotify] = useState({
        isOpen: false, message: '', type: ''
    });
    const handleAddToWatchLater = (id) => {
        let likedBook = books.filter(book => book.id === id);
        // console.log(...likedBook)
        if (likedBooks.some(book => book.id === id)) {
            setNotify({
                isOpen:true, message: 'Ця книга вже є в вашому списку', type: 'error'
            });


        } else {
            dispatch({type: 'ADD_LIKED_BOOKS', likedBooks: likedBook});
            setNotify({
                isOpen:true, message: 'Успішно додано до списку', type: 'success'
            });

        }
    };
    useEffect(() => {
        console.log(likedBooks)
    }, [likedBooks]);
    return (
        <>
            <Notification notify={notify} setNotify={setNotify}/>
            {books.length >= 1
                ? <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="center">Author</StyledTableCell>
                                <StyledTableCell align="center">Year</StyledTableCell>
                                <StyledTableCell align="center">Lang</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {books.map((row) => (
                                <SearchTableRows {...{row, handleAddToWatchLater}}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : 'Введіть потрібні значення для пошуку'
            }
        </>
    );
};

export default OutputData;
