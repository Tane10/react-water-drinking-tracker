import axios from "axios";

//testJoe@test.com

const baseUrl = "https://fndt05814i.execute-api.us-east-2.amazonaws.com/dev/";

const getWaterDrunkByUser = async(email) => {
    await axios.get(`${baseUrl}?userEmail=${email}`).then((res) => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

const UpdateUserWaterDrunk = async(email, volume) => {
    let data = {
        email: email,
        volume: volume
    };

    await axios.put(baseUrl, data).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}

export {
    UpdateUserWaterDrunk,
    getWaterDrunkByUser
}