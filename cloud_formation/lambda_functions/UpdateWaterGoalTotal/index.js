const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB({
    region: "us-east-2"
});

exports.handler = async(event, context, callback) => {

    if (event.email === undefined && event.waterGoal === undefined) {
        callback("400 Invalid Input");
    }

    const newWaterGoal = event.waterGoal;
    const emailParam = event.email;

    await updateWaterGoal(emailParam, newWaterGoal).then((data) => {
        callback(null, {
            statusCode: 200,
            body: "updated item"
        });
    }).catch((err) => console.error(err))
}

async function updateWaterGoal(email, waterGoal) {

    const params = {
        TableName: "waterAmounts",
        Key: {
            "email": {
                "S": email
            }
        },
        UpdateExpression: "set waterGoalML = :goal",
        ExpressionAttributeValues: {
            ":goal": {
                'N': `${waterGoal}`
            }
        },
    };

    console.log("Updating the water goal...");
    return await dynamoDB.updateItem(params).promise();
}