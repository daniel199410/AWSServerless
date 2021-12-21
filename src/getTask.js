const AWS = require('aws-sdk');
const getTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const result = await dynamoDB.get({
        TableName: 'Task',
        Key: { id }
    }).promise()
    return {
        status: 200,
        body: {task: result.Item}
    }
}
module.exports = {getTask}
