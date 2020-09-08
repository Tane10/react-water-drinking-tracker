import React from 'react';
import './App.css'
import { Grid, makeStyles, Button, Container, Typography, Modal, TextField } from '@material-ui/core';
import { backGroundColor } from "./colors.js";
import HollowMan from "./images/WaterMan_hollow.png";
import Center from "react-center";
import { Create } from '@material-ui/icons';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import UpdateWaterVoumeBtn from "./components/updateWaterVoumeBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: backGroundColor
  },
  control: {
    padding: theme.spacing(2),
  },
  typographyStyle: {
    color: "white"
  },
  typographyStyleBold: {
    color: "white",
    fontWeight: "bold"

  },
  typographyStyleNumValues: {
    color: "white",
    fontWeight: "bold",
    fontSize: '40px'
  },
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
  textField:{
    paddingBottom: '13px',
    borderRadius: '20px'
  }
}));


function App() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [spacing, setSpacing] = React.useState(2);
  let totalWaterDrunk = 2.5;
  let achivedGoal = 15;
  let waterGoal = 3.5;
  return (
    <div style={{ backgroundColor: backGroundColor}}>
      <Grid direction="row" justify="center" alignItems="center" container className={classes.root}>

        <Grid direction="row" justify="center" alignItems="center" container spacing={5} style={{paddingTop: '51px', paddingBottom: '33Px'}}>
          <Grid item direction="column" xs={5} sm={6} md={2} container spacing={2}>
              <Typography align="center" fontWeight="fontWeightBold" className={classes.typographyStyleNumValues} >{totalWaterDrunk}L
              </Typography>
              <Typography align="center" className={classes.typographyStyle} >TOTAL WATER DRUNK</Typography>
          </Grid>

          <Grid item direction="column" xs={5} sm={6} md={2} container  spacing={2}>
              <Typography align="center" className={classes.typographyStyleNumValues} >{achivedGoal}</Typography>
              <Typography align="center" className={classes.typographyStyle} >ACHIEVED GOAL
                DAYS</Typography>
          </Grid>
        </Grid>

        <Grid>
          <Button onClick={handleOpen}>
            <Typography fontWeight="fontWeightBold" className={classes.typographyStyleBold} >{waterGoal}L
          <Create style={{ fontSize: 15 }} />
            </Typography>
          </Button>
          <br></br>

          <img src={HollowMan} alt="HollowMan" height=""/>
          <Typography fontWeight="fontWeightBold" align="center" className={classes.typographyStyleBold} > Nice work! Keep it up!</Typography>
          <Typography> val carosole</Typography>
        </Grid>
        <UpdateWaterVoumeBtn />
      </Grid>
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
                  <TextField className={classes.textField}  id="outlined-basic" variant="outlined"/>

                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button className={classes.modelBtn} variant="contained">UPDATE</Button>
                </Grid>

                {/* <transactionModal
                    openModal={this.openModal}
                /> */}
              </div>
            </Grid>
          </Fade>
        </Modal>
      </div>
    </div>

  );
}






export default App;
