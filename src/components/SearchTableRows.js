import CheckboxItem from "./Checkbox";
import DeleteItem from "./DeleteItem";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const SearchTableRows = ({row, handleAddToWatchLater}) => {

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
                {row.title}
            </StyledTableCell>
            <StyledTableCell align="center">{row.author}</StyledTableCell>
            <StyledTableCell align="center">{row.year}</StyledTableCell>
            <StyledTableCell align="center">{row.lang}</StyledTableCell>
            <StyledTableCell align="right">
                <Button onClick={()=>handleAddToWatchLater(row.id)}>
                    <WatchLaterIcon/>
                </Button>
            </StyledTableCell>
        </StyledTableRow>
    );
};
export default SearchTableRows;
