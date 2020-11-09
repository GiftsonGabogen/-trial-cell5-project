import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
	{
		getMovies {
			success
			message
			movies {
				name
				_id
				myrate
			}
		}
	}
`;

export const MOVIE_QUERY = gql`
	query getMovie($_id: ID!) {
		getMovie(_id: $_id) {
			success
			message
			movie {
				name
				_id
				myrate
			}
		}
	}
`;
