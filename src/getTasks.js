const AWS = require('aws-sdk');
const getTasks = async () => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const result = await dynamoDB.scan({
        TableName: 'Task'
    }).promise()
    const tasks = result.Items;
    return {
        status: 200,
        body: {tasks}
    }
}
module.exports = {getTasks}
