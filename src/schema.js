import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean
} from 'graphql';
import resolvers from './resolvers';

const RuleType = new GraphQLObjectType({
  name: 'RuleType',
  description: '...',

  fields: () => ({
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    rule: {
      type: RuleType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args) => resolvers.fetchById(args.id)
    }
  })
})

export default new GraphQLSchema({
  query: QueryType
});