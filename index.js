exports.handler = async (event) => {
    const AWS = require("aws-sdk");
    AWS.config.update({
        region: "eu-west-2",
        endpoint: "http://localhost:8000"
    });
    const docClient = new AWS.DynamoDB.DocumentClient();
    let params = {
        TableName: "Scranton",
        Item: {
            "id": event.id,
            "name": event.body.name,
            "fuel_type": event.body.fuel_type
        }
    };
    docClient.put(params, function (err) {
        if (err) {
            console.error(JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded ");
        }
    });
    return 'Data inserted in dynamodb'
}