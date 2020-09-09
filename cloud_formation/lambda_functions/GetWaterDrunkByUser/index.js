const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB({
    region: "us-east-2"
});

exports.handler = async(event, context, callback) => {
    const emailParam = event.email;

    if (event.email === undefined ) {
        callback("400 Invalid Input");
    }

    await findUserInfo(emailParam).then((data) => {
        const formatedRes = AWS.DynamoDB.Converter.unmarshall(data.Item);
        callback(null, {
            statusCode: 200,
            body: formatedRes
        });
    }).catch((err) => console.error(err))
}

async function findUserInfo(userEmail) {
    const params = {
        TableName: "waterAmounts",
        Key: {
            'email': {
                "S": userEmail
            }
        }
    };

    return await dynamoDB.getItem(params).promise();
}
