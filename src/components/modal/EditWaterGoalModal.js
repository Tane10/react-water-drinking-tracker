import React from 'react';
import { Modal, Grid, Typography, TextField, Button, IconButton, InputAdornment } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Close } from "@material-ui/icons"
import { modalUseStyles } from "../../useStyles"
import axios from "axios";
import { useForm } from "react-hook-form";



export default function EditWaterGoalModal({ openModal, closeModal }) {
    const classes = modalUseStyles();
    let newWaterGoal;

    const { register, handleSubmit } = useForm();

    const onSubmit = async (val) => {

        let data = {
            email: 'testJoe@test.com',
            waterGoal: parseInt(val.NewWaterGoal)
        };

        await axios.put("https://fndt05814i.execute-api.us-east-2.amazonaws.com/dev/user/update-water-goal", data
        ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        closeModal();

    }

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
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <Grid item xs={12} sm={12} >
                                    <TextField
                                    name="NewWaterGoal"
                                        inputRef={register}
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
                                </Grid>
                                <Grid item xs={12} sm={12} >
                                    <Button
                                        type='submit'
                                        className={classes.modelBtn}
                                        variant="contained"> UPDATE </Button>
                                </Grid>

                            </form>

                        </div>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    )
}