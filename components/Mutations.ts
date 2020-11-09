import { gql } from "@apollo/client";

export const ADD_MOVIE_MUTATION = gql`
	mutation addMovie($name: String, $myrate: Int) {
		addMovie(name: $name, myrate: $myrate) {
			success
			message
			movie {
				_id
				name
				myrate
			}
		}
	}
`;

export const UPDATE_MOVIE_MUTATION = gql`
	mutation updateMovie($_id: ID, $name: String, $myrate: Int) {
		updateMovie(_id: $_id, name: $name, myrate: $myrate) {
			success
			message
			movie {
				_id
				name
				myrate
			}
		}
	}
`;

export const DELETE_MOVIE_MUTATION = gql`
	mutation deleteMovie($_id: ID) {
		deleteMovie(_id: $_id) {
			success
			message
			movie {
				_id
				name
				myrate
			}
		}
	}
`;
