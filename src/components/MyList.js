import React, {useEffect, useState} from 'react';
import OutputData from "./OutputData";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import {v4 as uuid} from 'uuid';
import LikedTableRows from "./LikedTableRows";
import {useDispatch, useSelector} from "react-redux";
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


const useStyles = makeStyles({
    table: {
        width: '100%',
    },
});
const MyList = ({theme}) => {
    const likedBooks = useSelector(state => state.likedBooks);
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log(likedBooks)
    const [notify, setNotify]=useState({
        isOpen:false, message: '', type: ''
    });
    // const [watchLaterBooks, setWatchLaterBooks] = useState(likedBooks);
    useEffect(() => {
        localStorage.setItem('watchLaterBooks', JSON.stringify([...likedBooks]));
    }, [likedBooks]);

    const handleDelete = (id) => {
        dispatch({type: 'DELETE_LIKED_BOOKS', idLikedBook: id});
   setNotify({
       isOpen:true, message: 'Успішно видалено зі списку', type: 'success'
   });
    };

    return (
        <>
            <h2>Список "Переглянути пізніше"</h2>
            <Notification notify={notify} setNotify={setNotify} />
            {likedBooks.length !== 0 ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="center">Author</StyledTableCell>
                                <StyledTableCell align="center">Year</StyledTableCell>
                                <StyledTableCell align="center">Lang</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {likedBooks.map((row) => (
                                <LikedTableRows {...{row, classes, handleDelete}}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : 'У списку ще нeмає книг'
            }
        </>
    );
};

export default MyList;
