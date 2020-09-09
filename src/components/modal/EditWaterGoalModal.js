import React from 'react';
import { Modal, Grid, Typography, TextField, Button, makeStyles, IconButton} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Close } from "@material-ui/icons"

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
    },
    cross: {
        justify: "rigth", 
        alignItems: "right"
    }

}));

export default function EditWaterGoalModal({ openModal, closeModal }) {

    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={closeModal}
                closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }} >
                <Fade in={openModal} style={{ width: '261px', height: '282px' }} >
                    <Grid justify="center" container direction="column" style={{ justifyContent: 'center' }} >


                        <div className={classes.paper} >

                            <IconButton aria-label="close" onClick={closeModal}>
                                    <Close style={{ color: '#62BFEF' }} />
                            </IconButton>                            

                            <Grid item xs={12} sm={12} >
                                <Typography className={classes.modalTiltle}> Update Target Water </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <Typography className={classes.modalText} > Please enter your new water target below: </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <TextField
                                    className={classes.textField}
                                    id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <Button
                                    className={classes.modelBtn}
                                    variant="contained" > UPDATE </Button>
                            </Grid>
                        </div>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    )
}