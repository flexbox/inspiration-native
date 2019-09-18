const { GraphQLServerLambda } = require('graphql-yoga');
const { prisma } = require('../server/generated/prisma-client');

const typeDefs = /* GraphQL */ `
  scalar DateTime

  type Query {
    quotes: [Quote!]!
    quote(id: ID!): Quote
    randomQuote: Quote
    lastQuote: Quote
  }

  type Mutation {
    createQuote(
      title: String!
      author: String!
      twitterName: String
      slug: String!
    ): Quote!
  }

  type Quote {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    author: String!
    twitterName: String
    slug: String!
  }
`;

const resolvers = {
  Query: {
    quotes: (parent, args, context) => {
      return context.prisma.quotes();
    },
    quote: (parent, { id }, context) => {
      return context.prisma.quote({ id });
    },
    randomQuote: async (parent, args, context) => {
      const count = await context.prisma
        .quotesConnection()
        .aggregate()
        .count();
      const quotes = await context.prisma.quotes();
      return quotes[Math.floor(Math.random() * count)];
    },
    lastQuote: async (parent, args, context) => {
      const quotes = await context.prisma.quotes({ orderBy: 'createdAt_ASC' });
      return quotes[quotes.length - 1];
    }
  },
  Mutation: {
    createQuote: (parent, { title, author, twitterName, slug }, context) => {
      return context.prisma.createUser({
        title,
        author,
        twitterName,
        slug
      });
    }
  }
};

const lambda = new GraphQLServerLambda({
  cors: {
    origin: '*',
    credentials: true
  },
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});

exports.handler = lambda.handler;
