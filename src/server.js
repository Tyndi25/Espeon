import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';
// const myGraphQLSchema = schema;
const PORT = 3200;

const app = express();

// bodyParser  is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

let server = app.listen(PORT, () => {
  let address = server.address();
  let url = `http://${address.host || 'localhost'}:${PORT}`;
  return console.info(`Listening at ${url}/graphiql`);
});