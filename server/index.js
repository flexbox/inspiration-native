const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    quotes: (parent, args, context) => {
      return context.prisma.quotes()
    },
    quote: (parent, { id }, context) => {
      return context.prisma.quote({ id })
    },
    randomQuote: async (parent, args, context) => {
      const count = await context.prisma
        .quotesConnection()
        .aggregate()
        .count()
      const quotes = await context.prisma.quotes()
      return quotes[Math.floor(Math.random() * count)]
    },
    lastQuote: async (parent, args, context) => {
      const quotes = await context.prisma.quotes({ orderBy: 'createdAt_ASC' })
      return quotes[quotes.length - 1]
    }
  },
  Mutation: {
    createQuote: (parent, { title, author, twitterName, slug }, context) => {
      return context.prisma.createUser({
        title,
        author,
        twitterName,
        slug
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
  context: {
    prisma
  }
})

server.start(() =>
  console.log('✅  GraphQL Server is running on http://localhost:4000')
)
