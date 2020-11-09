import { useState, useEffect } from "react";
import { MOVIE_QUERY } from "../components/Query";
import { initializeApollo } from "../apollo/apolloClient";
import { IMovie, ISortMethod } from "./index";

export default function MovieView({
	movie: { name, _id, myrate }
}: {
	movie: IMovie;
}) {
	const [MovieInfo, setMovieInfo] = useState(null);
	useEffect(() => {
		fetch(
			`https://www.omdbapi.com/?apikey=6746a406&t=${name.replace(" ", "+")}`
		)
			.then(res => res.json())
			.then(data => {
				setMovieInfo(data);
			});
	}, []);

	return (
		<div className="Wrapper">
			<div className="Title">{name}</div>
			<br />
			<table className="Info">
				<thead>
					<tr>
						<th>Year</th>
						<th>Runtime</th>
						<th>Metascore</th>
						<th>imdbRating</th>
						<th>imdbVotes</th>
						<th>imdbID</th>
					</tr>
				</thead>
				<tbody className="Info">
					{MovieInfo !== null ? (
						<tr>
							<td>{MovieInfo.Year}</td>
							<td>rated {MovieInfo.Runtime}</td>
							<td>{MovieInfo.Metascore}</td>
							<td>{MovieInfo.imdbRating}</td>
							<td>{MovieInfo.imdbVotes}</td>
							<td>{MovieInfo.imdbID}</td>
						</tr>
					) : null}
				</tbody>
			</table>
			<style jsx>{`
				* {
					text-align: center;
				}
				.Title {
					font-size: 3em;
					margin-bottom: 100px;
				}
				.Wrapper {
					padding: 100px;
				}
				td {
					padding: 10px 20px;
				}
			`}</style>
		</div>
	);
}

export async function getServerSideProps(context) {
	const apolloClient = initializeApollo();
	const queryData = await apolloClient.query({
		query: MOVIE_QUERY,
		variables: { _id: context.query._id }
	});
	return {
		props: {
			movie: queryData.data.getMovie.movie
		}
	};
}
