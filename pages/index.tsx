import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
import { ADD_MOVIE_MUTATION } from "../components/Mutations";
import { MOVIES_QUERY } from "../components/Query";
import { useQuery, useMutation } from "@apollo/client";
import Movietable from "../components/Movietable";
import sorter from "../components/tools/sorter";

const Wrapper = styled.div`
	padding: 40px;
	small.sortIndicator {
		transform: rotateX(90deg);
		&.primary {
			color: red;
		}
	}
	table {
		min-width: 1000px;
		th.attribute {
			cursor: pointer;
		}
	}
	.HeadContainer {
		display: grid;
		grid-template-columns: 1fr 1fr 3fr;
		padding: 50px 0px;
		.FormContainer {
			form {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 20px;
				input[type="submit"] {
					grid-column: 1/3;
				}
			}
		}
	}
`;

export interface ISortMethod {
	name: { sort: string };
	myrate: { sort: string };
}

export interface IMovie {
	_id: string;
	name: string;
	myrate: number;
}

const Home: React.FC = () => {
	let initialSort = { name: { sort: "" }, myrate: { sort: "" } };
	let initialSearchFilter = "";

	const [sortMethod, setSortMethod] = useState<ISortMethod>(initialSort);
	const [sortPriority, setSortPriority] = useState<string>("");
	const [searchFilter, setSearchFilter] = useState<string>(initialSearchFilter);

	//Querying the Movies
	const { data, error, loading } = useQuery(MOVIES_QUERY);

	//Mutation for Adding Movie
	const [addMovie, { data: addMovieData }] = useMutation(ADD_MOVIE_MUTATION, {
		update: (proxy, { data: { addMovie } }) => {
			const newMovie = addMovie.movie;
			const data: { getMovies: { movies: IMovie[] } } = proxy.readQuery({
				query: MOVIES_QUERY
			});
			proxy.writeQuery({
				query: MOVIES_QUERY,
				data: {
					...data,
					getMovies: {
						movies: [...data.getMovies.movies, newMovie]
					}
				}
			});
		}
	});

	const addMovieSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const formData = new window.FormData(form);
		const name = formData.get("name");
		const myrate = formData.get("myrate");
		form.reset();
		addMovie({ variables: { name, myrate: Number(myrate) } });
	};

	const nameClicked = () => {
		let name = "";
		if (sortMethod.name.sort === "") {
			name = "asc";
		} else if (sortMethod.name.sort === "asc") {
			name = "desc";
		}
		setSortMethod(prevSortMethod => {
			return {
				...prevSortMethod,
				name: { sort: name }
			};
		});
		if (sortMethod.myrate.sort !== "") {
			setSortPriority("myrate");
		}
		if (name === "") {
			setSortPriority("");
		}
	};

	const myrateClicked = () => {
		let myrate = "";
		if (sortMethod.myrate.sort === "") {
			myrate = "asc";
		} else if (sortMethod.myrate.sort === "asc") {
			myrate = "desc";
		}
		setSortMethod(prevSortMethod => {
			return {
				...prevSortMethod,
				myrate: { sort: myrate }
			};
		});
		if (sortMethod.name.sort !== "") {
			setSortPriority("name");
		}
		if (myrate === "") {
			setSortPriority("");
		}
	};
	if (loading) return <div>loading</div>;
	if (error) {
		console.log(error);
		return <div>error</div>;
	}
	if (!data) return <div>no data found</div>;
	const movies = data.getMovies.movies.slice();
	//sorting the movies base on settings on state
	const sortedMovies = sorter({ sortMethod, movies, sortPriority });

	let searchFilteredMovies: IMovie[];
	//for the filtering
	if (searchFilter !== "") {
		searchFilteredMovies = sortedMovies.filter(movie => {
			return movie.name.toLowerCase().includes(searchFilter.toLowerCase());
		});
	} else {
		searchFilteredMovies = sortedMovies;
	}
	return (
		<Wrapper>
			<h1 className="title">My Movies</h1>
			<div className="HeadContainer">
				<div className="Tools">
					<h3>search</h3>
					<div className="search">
						<input
							type="text"
							name="search"
							id=""
							value={searchFilter}
							onChange={e => setSearchFilter(e.target.value)}
						/>
					</div>
				</div>
				<div className="FormContainer">
					<h2 className="formTitle">Add Movie</h2>
					<form onSubmit={addMovieSubmit}>
						<input type="text" name="name" />
						<select name="myrate">
							<option value={1}>bad</option>
							<option value={2}>good</option>
							<option value={3}>better</option>
							<option value={4}>oscar winning</option>
							<option value={5}>beyond oscar</option>
						</select>
						<input type="submit" value="add" />
					</form>
				</div>
			</div>
			<table className="Movies">
				<thead>
					<tr>
						{/* nested if else below is for the sorting indicator
                if the color of the indicator is primary or red
                it means the sortMethod first sort first the primary before the second sorting
                example:
                if name sorting indicator color is red the movies is
                sorted name first then myrate last
            */}
						<th onClick={nameClicked} className="attribute">
							name{" "}
							<small
								className={`sortIndicator ${
									sortPriority === "name" ? "primary" : ""
								}`}
							>
								{sortMethod.name.sort !== ""
									? sortMethod.name.sort === "asc"
										? "asc"
										: "desc"
									: ""}
							</small>
						</th>
						<th onClick={myrateClicked} className="attribute">
							myrate{" "}
							<small
								className={`sortIndicator ${
									sortPriority === "myrate" ? "primary" : ""
								}`}
							>
								{sortMethod.myrate.sort !== ""
									? sortMethod.myrate.sort === "asc"
										? "asc"
										: "desc"
									: ""}
							</small>
						</th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{searchFilteredMovies.map(movie => (
						<Movietable
							key={movie._id}
							details={{
								_id: movie._id,
								name: movie.name,
								myrate: movie.myrate
							}}
						/>
					))}
				</tbody>
			</table>
		</Wrapper>
	);
};

export default Home;

{
	/* <div className="sortMethod">
						<h3>sort by:</h3>
						<select
							name="myrate"
							defaultValue={sortMethod}
							onChange={sortMethodChange}
						>
							<option value="name">name</option>
							<option value="myrate">myrate</option>
						</select>
					</div> */
}
