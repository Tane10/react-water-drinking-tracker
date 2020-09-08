import React from 'react';
import axios from 'axios';
import MinusBtn from "../images/minus_btn.svg";
import PlusBtb from "../images/plus_btn.svg";
import { Grid, Button } from '@material-ui/core';


export default class UpdateWaterVoumeBtn extends React.Component {
    state = {
        volume: 0
    };

    handleChange = event => {
        this.setState({ id: 200 });
    }

    handleSubmit = async event => {

        const baseUrl = "https://fndt05814i.execute-api.us-east-2.amazonaws.com/dev";

        event.preventDefault();

        let data = {
            email: 'testJoe@test.com',
            volume: 300
        };

        await axios.put(baseUrl, JSON.stringify(data), ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <Grid container justify="center" spacing={3}>
                <Button>
                    <img src={MinusBtn} alt="minusBtn" onClick={this.handleSubmit} />
                </Button>
                <Button>
                    <img src={PlusBtb} alt="plusBtn" />
                </Button>
            </Grid>
        )
    }

}




//testJoe@test.com



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