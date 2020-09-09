import React from 'react';
import './App.css'
import { Grid, makeStyles, Button, Typography,  } from '@material-ui/core';
import { backGroundColor } from "./colors.js";
import HollowMan from "./images/man_svg.svg";
import ImageMask from "./images/IMG_MAN_MASK.svg";
import { Create } from '@material-ui/icons';
import UpdateWaterVoumeBtn from "./components/updateWaterVoumeBtn";
import EditWaterGoalModal from "./components/modal/EditWaterGoalModal";


const waterVolmueAmounts = [
  { id: 1, name: '150 ml' },
  { id: 2, name: '250 ml' },
  { id: 3, name: '350 ml' },
  { id: 4, name: '450 ml' },
];

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
  textField: {
    paddingBottom: '13px',
    borderRadius: '20px'
  }
}));




export default function App() {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let totalWaterDrunk = 2.5;
  let achivedGoal = 15;
  let waterGoal = 3.5;

  return (
    <div style={{ backgroundColor: backGroundColor }}>
      <Grid direction="row" justify="center" alignItems="center" container className={classes.root}>

        <Grid direction="row" justify="center" alignItems="center" container spacing={5} style={{ paddingTop: '51px', paddingBottom: '33Px' }}>
          <Grid item direction="column" xs={5} sm={6} md={5} container spacing={2}>
            <Typography align="center" fontWeight="fontWeightBold" className={classes.typographyStyleNumValues} >{totalWaterDrunk}L
              </Typography>
            <Typography align="center" className={classes.typographyStyle} >TOTAL WATER DRUNK</Typography>
          </Grid>

          <Grid item direction="column" xs={5} sm={6} md={5} container spacing={2}>
            <Typography align="center" className={classes.typographyStyleNumValues} >{achivedGoal}</Typography>
            <Typography align="center" className={classes.typographyStyle} >ACHIEVED GOAL
                DAYS</Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center">
          <Grid item xs={6}  sm={4} md={1} >
            <Button onClick={handleOpen}>
              <Typography fontWeight="fontWeightBold" className={classes.typographyStyleBold} >{waterGoal}L
          <Create style={{ fontSize: 15 }} />
              </Typography>
            </Button>


            {/* <div style={{
            backgroundColor: "red",
            height: '200px',
            width: '100px',
            WebkitMaskImage: `url(${HollowMan})` ,
            maskImage: `url(${HollowMan})`,
            // maskSize: '30px'

          }} > test */}
            <img src={HollowMan} alt="HollowMan" height=""
              style={{
                WebkitMaskImage: `url(${ImageMask})`,
                maskImage: `url(${ImageMask})`,
                backgroundColor: "#4E96D3",
                maskSize: 'auto',
                WebkitMaskSize: 'auto',
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat"
              }} />
          </Grid>

          <Grid container  justify="center" alignItems="center" >
            <Typography fontWeight="fontWeightBold" align="center" className={classes.typographyStyleBold} > Nice work! Keep it up!</Typography>
            <Grid container justify="center" alignItems="center" >
              {waterVolmueAmounts.map(item => 
              <Grid item xs={3}  sm={2} md={1} >
                <Button style={{ color: "white",
                paddingTop:'13px',
                paddingBottom: '13px',
                fontWeight: "bold",
              }} key={item.id}>{item.name} </Button>
                </Grid>)}
            </Grid>
          </Grid>

          <UpdateWaterVoumeBtn />
          <EditWaterGoalModal 
          openModal={open}
          closeModal={handleClose}/>
        </Grid>
      </Grid>
    </div>
  );
}



