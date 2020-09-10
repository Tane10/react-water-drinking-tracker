import React from 'react';
import { Typography, AppBar, Tabs, Tab, Grid, IconButton } from '@material-ui/core';
import { tabUseStyles } from "../styles/useStyles";
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Add, Remove } from '@material-ui/icons';
import axios from "axios";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const waterVolmueAmounts = [
    { key: 0, volume: 150 },
    { key: 1, volume: 250 },
    { key: 2, volume: 350 },
    { key: 3, volume: 450 },
];

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function ScrollableTabsButtonAuto({ updateWaterValues, validation }) {
    const classes = tabUseStyles();
    const [value, setValue] = React.useState(0);
    const [waterAmount, setWaterAmount] = React.useState(150);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        waterVolmueAmounts.map((waterVolume) => {
            if (waterVolume.key === newValue) {
                setWaterAmount(waterVolume.volume)
            }
        })
    };

    const updateTotalWaterDrunk = async (e) => {
        e.preventDefault();

        const operator = e.currentTarget.value;

        const url = process.env.REACT_APP_UPDATE_WATER_TOTAL_URL;

        let data = {
            email: 'testJoe@test.com',
            volume: waterAmount,
            operator: operator
        };

        await axios.put(url, JSON.stringify(data)).then(res => {
            return res.status
        }).catch(err => {
            console.log(err)
        })

        updateWaterValues();
    }

    return (
        <div className={classes.root} >
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', justifyContent: 'center', alignItems: 'center' }} >
                <Tabs
                    classes={{ indicator: classes.indicator }}
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="150 ml" {...a11yProps(0)} style={{ fontSize: '26px' }} classes={{ selected: classes.tabText }} />
                    <Tab label="250 ml" {...a11yProps(1)} style={{ fontSize: '26px' }} classes={{ selected: classes.tabText }} />
                    <Tab label="350 ml" {...a11yProps(2)} style={{ fontSize: '26px' }} classes={{ selected: classes.tabText }} />
                    <Tab label="450 ml" {...a11yProps(3)} style={{ fontSize: '26px' }} classes={{ selected: classes.tabText }} />
                </Tabs>
            </AppBar>
            <Grid container justify="center" alignItems="center" alignContent="center" spacing={1}>
                <Grid item xs={2} sm={1} md={1}>
                    <IconButton classes={{ root: classes.iconButtons }} aria-label="add" value='add' color="primary" onClick={updateTotalWaterDrunk}>
                        <Add />
                    </IconButton>
                </Grid>
                <Grid item xs={2} sm={1} md={1}>
                    <IconButton classes={{ root: classes.iconButtons }} aria-label="remove" value='remove' color="primary"
                        onClick={(e) => { if (((validation * 1000) - waterAmount) > 0) { updateTotalWaterDrunk(e) } }}>
                        <Remove />
                    </IconButton>
                </Grid>
            </Grid>
        </div >
    );
}
