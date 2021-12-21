const AWS = require('aws-sdk');
const deleteTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    return {
        status: 200
    }
}
module.exports = {deleteTask}
