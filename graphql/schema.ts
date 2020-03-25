import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { gql } from 'apollo-server-express';
import Application from 'database/entities/application.entity';
import { catchDBError } from '@Lib/error';

const typeDef = gql`
  scalar Date

  type Application {
    pk: Int!
    phone: String!
    classNum: Int!
    studentNum: Int!
    name: String!
    field: String!
    content: String!
    isSubmit: Boolean!
  }

  type Query {
    applications: [Application]!
    application(pk: Int!): Application!
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Query: {
    applications: async (_: any) => {
      const application: Application[] = await Application.findAll().catch(catchDBError());

      console.log(application);

      return application;
    },
    application: async (
      _: any,
      {
        pk
      }: {
        pk: Application['pk'];
      }
    ) => {
      console.log(pk);
      const application: Application = await Application.findOne({
        where: {
          pk
        }
      }).catch(catchDBError());

      console.log(application, 1);

      return application;
    }
  },
  Mutation: {}
};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDef],
  resolvers: resolvers
});

export default schema;
