import { makeStyles } from '@material-ui/core';
import { backGroundColor } from "./colors.js";


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


export { useStyles }