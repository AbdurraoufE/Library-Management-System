// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Book, User } = initSchema(schema);

export {
  Book,
  User
};