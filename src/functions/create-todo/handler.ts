import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import todoService from 'src/services/todo.service';
import schema from './schema';

const addTodo: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  todoService.createTodo(event.body);
  return formatJSONResponse({
    message: 'created',
  });
};

export const main = middyfy(addTodo);
