import React from 'react';
// import './App.css
import { Grid, Paper, makeStyles, Button, Container, Typography } from '@material-ui/core';
import { backGroundColor } from "./colors.js";
import HollowMan from "./images/WaterMan_hollow.png";
import MinusBtn from "./images/minus_btn.svg";
import PlusBtb from "./images/plus_btn.svg";
import Center from "react-center";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  typographyStyle: {
    color: "white"
  },
  typographyStyleNumValues: {
    color: "white",
    fontWeight: "bold",
    fontSize: '40px'
  }
}));


function App() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  let totalWaterDrunk = 2.5;
  let achivedGoal = 15;
  return (
    <Container justify="center" style={{ backgroundColor: backGroundColor }}>
      <Grid justify="center" container className={classes.root} spacing={5}>
            <Grid item xs={4} sm={6}>
              <div >
                <Typography  fontWeight="fontWeightBold" className={classes.typographyStyleNumValues} >{totalWaterDrunk}L</Typography>
                <Typography className={classes.typographyStyle} >TOTAL WATER DRUNK</Typography>
              </div>
              </Grid>
              <Grid item xs={4} sm={6}>
              <div>
                <Typography className={classes.typographyStyleNumValues} >{achivedGoal}</Typography>
                <Typography className={classes.typographyStyle} >ACHIEVED GOAL
                DAYS</Typography>
              </div>
            </Grid>
        </Grid>

        {/* {[0, 1].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))} */}
        <Container>
          <img class="center" src={HollowMan} alt="HollowMan" />
          <Typography fontWeight="fontWeightBold" className={classes.typographyStyle} > Nice work! Keep it up!</Typography>
          <Typography> val carosole</Typography>

        </Container>
        <Grid container justify="center" spacing={spacing}>
          <Button>
            <img src={MinusBtn} alt="minusBtn" />
          </Button>
          <Button>
            <img src={PlusBtb} alt="plusBtn" />
          </Button>
        </Grid>
    </Container >
  );
}

export default App;
