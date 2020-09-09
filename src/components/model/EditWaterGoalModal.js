import React from 'react';
import { Modal, Grid, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'white',
        padding: theme.spacing(2, 4, 3),
        borderRadius: '20px',
    },
    modelBtn: {
        color: 'white',
        backgroundColor: '#62BFEF',
        fontWeight: 'bold',
        paddingLeft: '32px',
        paddingRight: '31px',
    },
    modalTiltle: {
        color: '#62BFEF',
        fontWeight: 'bold',
        // paddingTop: '34px',
        paddingLeft: '25px',
        paddingRight: '25px',
        // paddingBottom: '32px',
        fontSize: '22px'
    },
    modalText: {
        color: '#62BFEF',
        paddingTop: '32px',
        paddingLeft: '32px',
        paddingRight: '31px',
        paddingBottom: '22px',
        fontSize: '14px'
    },
    textField: {
        paddingBottom: '13px',
        borderRadius: '20px'
    }
}));

const update

export default function EditWaterGoalModal() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( <
        div >
        <
        Modal aria - labelledby = "transition-modal-title"
        aria - describedby = "transition-modal-description"
        className = { classes.modal }
        open = { open }
        onClose = { handleClose }
        closeAfterTransition BackdropComponent = { Backdrop }
        BackdropProps = {
            { timeout: 500, } } >
        <
        Fade in = { open }
        style = {
            { width: '261px', height: '282px' } } >
        <
        Grid justify = "center"
        container direction = "column"
        style = {
            { justifyContent: 'center' } } >
        <
        div className = { classes.paper } >
        <
        Grid item xs = { 12 }
        sm = { 12 } >
        <
        Typography className = { classes.modalTiltle } > Update Target Water < /Typography> <
        /Grid> <
        Grid item xs = { 12 }
        sm = { 12 } >
        <
        Typography className = { classes.modalText } > Please enter your new water target below: < /Typography> <
        /Grid> <
        Grid item xs = { 12 }
        sm = { 12 } >
        <
        TextField className = { classes.textField }
        id = "outlined-basic"
        variant = "outlined" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        sm = { 12 } >
        <
        Button className = { classes.modelBtn }
        variant = "contained" > UPDATE < /Button> <
        /Grid> <
        /div> <
        /Grid> <
        /Fade> <
        /Modal> <
        /div>
    )
}