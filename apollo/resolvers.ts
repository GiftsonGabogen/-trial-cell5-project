const Movie = require("../models/Movie.model");
import * as mongoose from "mongoose";

const resolvers = {
	Query: {
		getMovies: () => {
			const data = Movie.find().then(res => {
				return res;
			});
			return {
				success: true,
				message: "got all Movies",
				movies: data
			};
		},
		getMovie: async (_, { _id }) => {
			const data = await Movie.find({ _id: _id }).then(res => {
				return res[0];
			});
			return {
				success: true,
				message: "got movie",
				movie: data
			};
		}
	},
	Mutation: {
		addMovie: async (_, { name, myrate }) => {
			const newMovie = new Movie({
				_id: new mongoose.Types.ObjectId(),
				name,
				myrate
			});
			const data = await newMovie.save();
			return {
				success: true,
				message: "added Movie Successfully",
				movie: data
			};
		},
		deleteMovie: async (_, { _id }) => {
			const data = await Movie.findByIdAndDelete(_id);
			return {
				success: true,
				message: "deleted Movie Successfully",
				movie: data
			};
		},
		updateMovie: async (_, { _id, name, myrate }) => {
			const data = await Movie.findByIdAndUpdate(
				_id,
				{ $set: { name, myrate } },
				{ new: true }
			);
			return {
				success: true,
				message: "added Movie Successfully",
				movie: data
			};
		}
	}
};

export default resolvers;
