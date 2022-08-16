import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import todoService from 'src/services/todo.service';
import schema from './schema';

const getTodo: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const value = await todoService.getTodos(event.queryStringParameters.date);

  return formatJSONResponse({
    message: `${value.Items}`,
  });
};

export const main = middyfy(getTodo);
