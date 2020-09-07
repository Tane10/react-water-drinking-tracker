import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Grid, Typography, TextField,Button} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


class ChatForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            isModalVisible : false
        }

    }

    showModole = () => this.setState({  isModalVisible : true })

    render() {
        const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


        const {  login } = this.state
        
        return(
            <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} style={{
                    width: '261px',
                    height: '282px'
                }}>
                    <Grid justify="center" container direction="column" style={{ justifyContent: 'center' }}>

                        <div className={classes.paper} >
                            <Grid item xs={12} sm={12}>
                                <Typography className={classes.modalTiltle} >Update Target Water</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography className={classes.modalText}>Please enter your new water target below:</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField id="outlined-basic" variant="outlined" />

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button className={classes.modelBtn} variant="contained">UPDATE
                                    onPress={this.showModule}
                                </Button>
                            </Grid>

                        </div>
                    </Grid>
                </Fade>
            </Modal>
        </div>

            
        )
    }

}

// export class TransitionsModal {
    

//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const modal  = return (
//         <div>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={open} style={{
//                     width: '261px',
//                     height: '282px'
//                 }}>
//                     <Grid justify="center" container direction="column" style={{ justifyContent: 'center' }}>

//                         <div className={classes.paper} >
//                             <Grid item xs={12} sm={12}>
//                                 <Typography className={classes.modalTiltle} >Update Target Water</Typography>
//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <Typography className={classes.modalText}>Please enter your new water target below:</Typography>
//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <TextField id="outlined-basic" variant="outlined" />

//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <Button className={classes.modelBtn} variant="contained">UPDATE</Button>
//                             </Grid>

//                         </div>
//                     </Grid>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }







// export function TransitionsModal() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={open} style={{
//                     width: '261px',
//                     height: '282px'
//                 }}>
//                     <Grid justify="center" container direction="column" style={{ justifyContent: 'center' }}>

//                         <div className={classes.paper} >
//                             <Grid item xs={12} sm={12}>
//                                 <Typography className={classes.modalTiltle} >Update Target Water</Typography>
//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <Typography className={classes.modalText}>Please enter your new water target below:</Typography>
//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <TextField id="outlined-basic" variant="outlined" />

//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <Button className={classes.modelBtn} variant="contained">UPDATE</Button>
//                             </Grid>

//                         </div>
//                     </Grid>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }
