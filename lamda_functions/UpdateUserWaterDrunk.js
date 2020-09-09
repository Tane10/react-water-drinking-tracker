const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB({
    region: "us-east-2"
});

exports.handler = async(event, context, callback) => {

    if (event.email === undefined && event.volume === undefined && event.operator === undefined) {
        callback("400 Invalid Input");
    }

    const waterVolume = event.volume;
    const emailParam = event.email;
    const op = event.operator;

    await updateTotalDrunkWater(emailParam, waterVolume, op).then((data) => {
        callback(null, {
            statusCode: 200,
            body: "updated item"
        });
    }).catch((err) => console.error(err))
}

async function updateTotalDrunkWater(email, volume, op) {

    const getWaterGoal = (async(email) => {
        const params = {
            TableName: "waterAmounts",
            Key: {
                "email": {
                    "S": email
                }
            },
        };
        return await dynamoDB.getItem(params).promise();
    });

    const userWaterGoal = await getWaterGoal(email);

    const formatedUserWaterGoal = AWS.DynamoDB.Converter.unmarshall(userWaterGoal.Item);

    if (op === "add") {
        const newVolume = formatedUserWaterGoal.totalWaterDrunkML + volume;
    }

    if (op === "remove") {
        const newVolume = formatedUserWaterGoal.totalWaterDrunkML - volume;
    }

    const params = {
        TableName: "waterAmounts",
        Key: {
            "email": {
                "S": email
            }
        },
        UpdateExpression: "set totalWaterDrunkML = :volume",
        ExpressionAttributeValues: {
            ":volume": {
                'N': `${newVolume}`
            }
        },
    };

    console.log("Updating the water...");
    return await dynamoDB.updateItem(params).promise();
}