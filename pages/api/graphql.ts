import { ApolloServer, makeExecutableSchema } from "apollo-server-micro";
import typeDefs from "../../apollo/typeDefs";
import resolvers from "../../apollo/resolvers";
import dbConnect from "../../utils/dbConnect";


const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
	schema: schema
});

export const config = {
	api: {
		bodyParser: false
	}
};

export default dbConnect(apolloServer.createHandler({ path: "/api/graphql" }));
