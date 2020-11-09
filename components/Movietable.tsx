import { IMovie, ISortMethod } from "../pages/index";

import styled from "styled-components";
import { useRef, useState } from "react";
import { UPDATE_MOVIE_MUTATION, DELETE_MOVIE_MUTATION } from "./Mutations";
import { MOVIES_QUERY } from "./Query";
import Link from "next/link";
import { useMutation } from "@apollo/client";

const Wrapper = styled.tr`
	border-bottom: 1px solid gray;
	&.Outline {
		outline: red solid 1px;
	}
	min-width: 500px;
	td {
		padding: 20px;
	}
	button {
		color: white;
		border: none;
		padding: 10px 15px;
		cursor: pointer;
		&.delete {
			background-color: red;
		}
		&.edit {
			background-color: blue;
		}
		&.done {
			background-color: green;
			visibility: hidden;
			transition: 200ms;
			&.Show {
				visibility: visible;
			}
		}
	}
`;

const MyrateConverter = (value: number) => {
	switch (value) {
		case 1:
			return "bad";
		case 2:
			return "good";
		case 3:
			return "better";
		case 4:
			return "oscar";
		case 5:
			return "beyond oscar";
		default:
			return "bad";
	}
};

const Movie = ({ details: { _id, name, myrate } }: { details: IMovie }) => {
	const [updateMovie] = useMutation(UPDATE_MOVIE_MUTATION);
	const [deleteMovie] = useMutation(DELETE_MOVIE_MUTATION, {
		update: (proxy, { data: { deleteMovie } }) => {
			const removedMovie = deleteMovie.movie;
			const data: { getMovies: { movies: IMovie[] } } = proxy.readQuery({
				query: MOVIES_QUERY
			});
			proxy.writeQuery({
				query: MOVIES_QUERY,
				data: {
					...data,
					getMovies: {
						movies: data.getMovies.movies.filter(
							movie => movie._id !== removedMovie._id
						)
					}
				}
			});
		}
	});
	const [editing, setEditing] = useState<boolean>(false);
	const WrapperRef = useRef(null);
	const nameRef = useRef(null);
	const myrateRef = useRef(null);
	const inputNameRef = useRef(null);
	const inputMyrateRef = useRef(null);
	const doneButtonRef = useRef(null);
	const edit = () => {
		WrapperRef.current.classList.add("Outline");
		doneButtonRef.current.classList.add("Show");
		setEditing(true);
	};

	const deleteSubmit = () => {
		deleteMovie({ variables: { _id: _id } });
	};

	const doneSubmit = () => {
		WrapperRef.current.classList.remove("Outline");
		doneButtonRef.current.classList.remove("Show");
		const variables = {
			_id,
			name: inputNameRef.current.value,
			myrate: Number(inputMyrateRef.current.value)
		};
		setEditing(false);
		updateMovie({ variables });
	};
	return (
		<Wrapper ref={WrapperRef}>
			<td className="name" ref={nameRef}>
				{editing ? (
					<input
						type="text"
						ref={inputNameRef}
						name="name"
						defaultValue={name}
					/>
				) : (
					<Link href={`/${_id}`}>
						<a>{name}</a>
					</Link>
				)}
			</td>
			<td className="myrate" ref={myrateRef}>
				{editing ? (
					<select name="myrate" ref={inputMyrateRef} defaultValue={myrate}>
						<option value={1}>bad</option>
						<option value={2}>good</option>
						<option value={3}>better</option>
						<option value={4}>oscar winning</option>
						<option value={5}>beyond oscar</option>
					</select>
				) : (
					MyrateConverter(myrate)
				)}
			</td>
			<td>
				<button className="edit" onClick={edit}>
					edit
				</button>
			</td>
			<td>
				<button className="delete" onClick={deleteSubmit}>
					delete
				</button>
			</td>

			<td>
				<button className="done" onClick={doneSubmit} ref={doneButtonRef}>
					done
				</button>
			</td>
		</Wrapper>
	);
};

export default Movie;
