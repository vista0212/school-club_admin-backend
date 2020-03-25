import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as graphqlHTTP from 'express-graphql';
import * as cors from 'cors';

import schema from './graphql/schema';
import { connect } from 'database';

const app: express.Application = express();

app.use(cors());

connect(false, true).then(() => {
  console.log('db connected!');
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

export default app;
