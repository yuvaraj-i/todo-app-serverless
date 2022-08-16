import * as AWS from 'aws-sdk';

const dbClient = new AWS.DynamoDB.DocumentClient();
const Name = process.env.DYNAMODB_TABLE;
const Index = process.env.DB_INDEX;

const findById = (id: string) => {
  const params = {
    TableName: Name,
    Key: {
      id,
    },
  };

  const data = dbClient.query(params).promise();
  return data;
};

const findByDate = (date: string) => {
  const params = {
    TableName: Name,
    IndexName: Index,
    KeyConditionExpression: '#dueDate = :dueDate',
    ExpressionAttributeValues: { ':dueDate': date },

  };

  return dbClient.query(params).promise();
};

const createTodo = (task: Task) => {
  const params = {
    TableName: Name,
    Item: task,
  };
  return dbClient.put(params).promise();
};

const updateTodo = (task: Task) => {
  const params = {
    TableName: Name,
    Key: {
      name: task.name,
      dueDate: task.dueDate,
    },
  };
  return dbClient.update(params).promise();
};

const deleteTodo = (id: string) => {
  const params = {
    TableName: Name,
    Key: {
      id,
    },
  };
  return dbClient.delete(params).promise();
};

export default {
  findById,
  findByDate,
  createTodo,
  updateTodo,
  deleteTodo,
};
