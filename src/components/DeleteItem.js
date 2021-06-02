import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const DeleteItem = ({handleDelete, id}) => {
    return (
        <DeleteIcon key={id} onClick={handleDelete} style={{cursor: 'pointer'}}/>
    );
};

export default DeleteItem;
