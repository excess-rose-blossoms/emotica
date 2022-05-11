type Query {
   stories(id: ID):[Story!]!
   users(id: ID): [Users!]!
}

type User {
	id: ID!
	username: String!
	description: String
	stories(id: ID): [Story!]!
}

type Story {
	id: ID!
	authors: [User!]!
	title: String!
	description: String
	chapters(number: Int): [Chapter!]!
}

type Chapter {
	number: Int!
	title: String!
	body: String!
	story: Story!
	datePublished: String! #temp
}