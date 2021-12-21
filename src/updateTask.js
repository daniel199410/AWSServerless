const AWS = require('aws-sdk');
const updateTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { description, title, done } = JSON.parse(event.body);
    const result = await dynamoDB.update({
        TableName: 'Task',
        Key: { id },
        UpdateExpression: "set description=:description, title=:title, done=:done",
        ExpressionAttributeValues: { ":done": done, ":description": description, ":title": title, },
        ReturnValues: "UPDATED_NEW",
    }).promise()
    return {
        status: 200,
        body: JSON.stringify(result),
    }
}
module.exports = {updateTask}
