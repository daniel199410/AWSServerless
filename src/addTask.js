const {v4} = require('uuid');
const AWS = require('aws-sdk');
const middy = require('@middy/core');
const jsonBodyParser = require("@middy/http-json-body-parser");

const addTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {title, description} = event.body;
    const createdAt = new Date();
    const id = v4();
    const task = {id, title, description, createdAt};
    await dynamoDB.put({
        TableName: 'Task',
        Item: task
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(task),
    }
}
module.exports = {addTask: middy(addTask).use(jsonBodyParser()),};
