import React from 'react';
import './styles/App.css'
import { Grid, Button, Typography, } from '@material-ui/core';
import HollowMan from "./images/man_svg.svg";
import ImageMask from "./images/IMG_MAN_MASK.svg";
import { Create } from '@material-ui/icons';
import EditWaterGoalModal from "./components/EditWaterGoalModal";
import { appUseStyles , backGroundColor} from "./styles/useStyles"
import axios from "axios";
import SideScrollWaterValues from "./components/sideScrollWaterValues"

export default function App() {
  const classes = appUseStyles();

  const [open, setOpen] = React.useState(false);
  const [refreshWaterInfo, setRefreshWaterInfo] = React.useState(false);
  const [totalWaterDrunk, setTotalWaterDrunk] = React.useState(0);
  const [achivedGoal, setAchivedGoal] = React.useState(0);
  const [waterGoal, setwaterGoal] = React.useState(0);

  React.useEffect(() => {
    const getWaterDrunkByUser = async (email) => {
      const water = await axios.get(`${process.env.REACT_APP_GET_USER_URL}${email}`).then((res) => {
        const waterInfo = res.data.body;
        waterInfo.totalWaterDrunkML = waterInfo.totalWaterDrunkML / 1000
        waterInfo.waterGoalML = waterInfo.waterGoalML / 1000

        return waterInfo
      }).catch(err => {
        console.log(err)
      })

      setTotalWaterDrunk(water.totalWaterDrunkML);
      setAchivedGoal(water.daysGoalAchived);
      setwaterGoal(water.waterGoalML);
      setRefreshWaterInfo(false)
    }
    getWaterDrunkByUser('testJoe@test.com');

  }, [totalWaterDrunk,
    achivedGoal,
    waterGoal,
    open,
    refreshWaterInfo])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const refreshWaterInfoCall = () => {
    setRefreshWaterInfo(true);
  }

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
          <Grid item xs={6} sm={4} md={1} >
            <Button onClick={handleOpen}>
              <Typography fontWeight="fontWeightBold" className={classes.typographyStyleBold} >{waterGoal}L
          <Create style={{ fontSize: 15 }} />
              </Typography>
            </Button>

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

          <Grid container justify="center" alignItems="center" >
            <Typography fontWeight="fontWeightBold" align="center" className={classes.typographyStyleBold} > Nice work! Keep it up!</Typography>
          </Grid>
          <SideScrollWaterValues
          updateWaterValues={refreshWaterInfoCall}
          validation={totalWaterDrunk}
          />
          {/* <UpdateWaterVoumeBtn /> */}
          <EditWaterGoalModal
            openModal={open}
            closeModal={handleClose} />
        </Grid>
      </Grid>
    </div>
  );
}


