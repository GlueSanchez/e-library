import CheckboxItem from "./Checkbox";
import DeleteItem from "./DeleteItem";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
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

const LikedTableRows=({row, handleDelete,})=>{

    return(
        <StyledTableRow key={row.id} >
            <StyledTableCell component="th" scope="row">
                <CheckboxItem/>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row" >
                {row.title}
            </StyledTableCell>
            <StyledTableCell align="center">{row.author}</StyledTableCell>
            <StyledTableCell align="center">{row.year}</StyledTableCell>
            <StyledTableCell align="center">{row.lang}</StyledTableCell>
            <StyledTableCell align="right">
                <Button onClick={()=>handleDelete(row.id)}>
                    <DeleteItem/>
                </Button>

            </StyledTableCell>
        </StyledTableRow>
    );
};
export default LikedTableRows;
