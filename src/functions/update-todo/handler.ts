import schema from '@functions/create-todo/schema';
import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import todoService from 'src/services/todo.service';

const updateTodo: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const task = event.body;
  const id = event.path;
  const value = await todoService.updateTodo(id, task);
  return formatJSONResponse({
    message: `${value}`,
  });
};

export const main = middyfy(updateTodo);
