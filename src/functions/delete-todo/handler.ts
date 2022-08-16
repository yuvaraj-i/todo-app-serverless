import schema from '@functions/create-todo/schema';
import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import todoService from 'src/services/todo.service';

const deleteTodo: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    todoService.deleteTodo(event.pathParameters.id);
    return formatJSONResponse({
      message: `deleted data: ${event.pathParameters.id}`,
    });
  } catch (e) {
    return formatJSONResponse({
      message: `error data: ${e}`,
    });
  }
};

export const main = middyfy(deleteTodo);
