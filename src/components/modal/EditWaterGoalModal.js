import React from 'react';
import { Modal, Grid, Typography, TextField, Button, makeStyles, IconButton,InputAdornment  } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Close } from "@material-ui/icons"
import { modalUseStyles} from "../../useStyles"


export default function EditWaterGoalModal({ openModal, closeModal }) {
    const classes = modalUseStyles();
    let newWaterGoal;

    // const UpdateUserWaterDrunk = async(email, volume) => {
    //     let data = {
    //         email: email,
    //         volume: volume
    //     };
    
    //     await axios.put(baseUrl, data).then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    
    // }


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
                                    id="outlined-basic" variant="outlined"
                                    value={newWaterGoal}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Typography className={classes.modalText} > ML</Typography>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {/* <TextField
                                    className={classes.textField}
                                    id="outlined-basic" variant="outlined" >
                                        words
                                        </TextField> */}
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