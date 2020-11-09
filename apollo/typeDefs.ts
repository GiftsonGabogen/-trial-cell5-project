import { gql } from "@apollo/client";

const typeDefs = gql`
	type Movie {
		_id: ID!
		name: String
		myrate: Int
	}

	type getMoviesPayload {
		success: Boolean!
		message: String
		movies: [Movie]
	}

	type getMoviePayload {
		success: Boolean!
		message: String
		movie: Movie
	}

	type addMoviePayload {
		success: Boolean!
		message: String
		movie: Movie
	}

	type deleteMoviePayload {
		success: Boolean!
		message: String
		movie: Movie
	}

	type updateMoviePayload {
		success: Boolean!
		message: String
		movie: Movie
	}

	type Query {
		getMovies: getMoviesPayload
		getMovie(_id: ID!): getMoviePayload
	}

	type Mutation {
		addMovie(name: String, myrate: Int): addMoviePayload
		deleteMovie(_id: ID): deleteMoviePayload
		updateMovie(_id: ID, name: String, myrate: Int): updateMoviePayload
	}
`;

export default typeDefs;
