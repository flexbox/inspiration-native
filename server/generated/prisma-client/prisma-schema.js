module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateQuote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createQuote(data: QuoteCreateInput!): Quote!
  updateQuote(data: QuoteUpdateInput!, where: QuoteWhereUniqueInput!): Quote
  updateManyQuotes(data: QuoteUpdateManyMutationInput!, where: QuoteWhereInput): BatchPayload!
  upsertQuote(where: QuoteWhereUniqueInput!, create: QuoteCreateInput!, update: QuoteUpdateInput!): Quote!
  deleteQuote(where: QuoteWhereUniqueInput!): Quote
  deleteManyQuotes(where: QuoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  quote(where: QuoteWhereUniqueInput!): Quote
  quotes(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quote]!
  quotesConnection(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuoteConnection!
  node(id: ID!): Node
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

type QuoteConnection {
  pageInfo: PageInfo!
  edges: [QuoteEdge]!
  aggregate: AggregateQuote!
}

input QuoteCreateInput {
  id: ID
  title: String!
  author: String!
  twitterName: String
  slug: String!
}

type QuoteEdge {
  node: Quote!
  cursor: String!
}

enum QuoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  twitterName_ASC
  twitterName_DESC
  slug_ASC
  slug_DESC
}

type QuotePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  author: String!
  twitterName: String
  slug: String!
}

type QuoteSubscriptionPayload {
  mutation: MutationType!
  node: Quote
  updatedFields: [String!]
  previousValues: QuotePreviousValues
}

input QuoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuoteWhereInput
  AND: [QuoteSubscriptionWhereInput!]
  OR: [QuoteSubscriptionWhereInput!]
  NOT: [QuoteSubscriptionWhereInput!]
}

input QuoteUpdateInput {
  title: String
  author: String
  twitterName: String
  slug: String
}

input QuoteUpdateManyMutationInput {
  title: String
  author: String
  twitterName: String
  slug: String
}

input QuoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  twitterName: String
  twitterName_not: String
  twitterName_in: [String!]
  twitterName_not_in: [String!]
  twitterName_lt: String
  twitterName_lte: String
  twitterName_gt: String
  twitterName_gte: String
  twitterName_contains: String
  twitterName_not_contains: String
  twitterName_starts_with: String
  twitterName_not_starts_with: String
  twitterName_ends_with: String
  twitterName_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [QuoteWhereInput!]
  OR: [QuoteWhereInput!]
  NOT: [QuoteWhereInput!]
}

input QuoteWhereUniqueInput {
  id: ID
}

type Subscription {
  quote(where: QuoteSubscriptionWhereInput): QuoteSubscriptionPayload
}
`
      }
    