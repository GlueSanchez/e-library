import React, {useState} from 'react';
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const Notification = ({notify, setNotify}) => {

    const handleClose = (e, reason) => {
        if(reason==='clickaway'){
            return;
        }
        setNotify({
            ...notify, isOpen: false
        });
    };
    return (
        <Snackbar open={notify.isOpen}
                  autoHideDuration={1500}
                  onClose={handleClose}>
            <Alert severity={notify.type}
                   onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
