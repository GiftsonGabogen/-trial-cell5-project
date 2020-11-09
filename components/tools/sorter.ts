/* [1,1,2,3,3,2,1,2,1,1,1]            sortedMovies
   [1,1,1,1,1,1,2,2,2,3,3]
    sortHolder      
   [1]
   [1,1,1,1,1,1]                       [[1,1,1,1,1,1]] 
   [2]
   [2,2,2]                             [[1,1,1,1,1,1],[2,2,2]]
   [] 
   [3,3]                               [[1,1,1,1,1,1],[2,2,2],[3,3]]
                                      [1,1,1,1,1,1,2,2,2,3,3] 
*/

import { IMovie, ISortMethod } from "../../pages/index";

//arranging data with common value on the given attribute
//ex: with the same myrate or the same name
//then group them on a sub array
function arrangeWithCommons({
	array,
	method
}: {
	array: IMovie[];
	method: string;
}) {
	const sortedMovies = [];
	let sortHolder = [];
	for (let i = 0; i < array.length; i++) {
		if (i === 0) {
			sortHolder.push(array[i]);
			continue;
		}
		if (array[i][method] === array[i - 1][method]) {
			sortHolder.push(array[i]);
		} else {
			sortedMovies.push(sortHolder);
			sortHolder = [array[i]];
		}
		if (i === array.length - 1) {
			if (sortHolder.length !== 0) {
				sortedMovies.push(sortHolder);
			}
		}
	}
	return sortedMovies;
}

//for sorting the myrate attribute
const sortMyrate = ({
	movies,
	sortMethod
}: {
	movies: IMovie[];
	sortMethod: ISortMethod;
}): IMovie[] => {
	return movies.sort((a, b) => {
		if (a.myrate > b.myrate) {
			return sortMethod.myrate.sort === "asc" ? 1 : -1;
		} else {
			return sortMethod.myrate.sort === "asc" ? -1 : 1;
		}
	});
};

//for sorting the name attribute
const sortName = ({
	movies,
	sortMethod
}: {
	movies: IMovie[];
	sortMethod: ISortMethod;
}): IMovie[] => {
	return movies.sort((a, b) => {
		if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return sortMethod.name.sort === "asc" ? 1 : -1;
		} else {
			return sortMethod.name.sort === "asc" ? -1 : 1;
		}
	});
};

export default function Sorter({
	sortMethod,
	movies,
	sortPriority
}: {
	sortMethod: ISortMethod;
	movies: IMovie[];
	sortPriority: String;
}): IMovie[] {
	if (sortMethod.name.sort === "" && sortMethod.myrate.sort == "") {
		return movies;
	}
	const sortedMovies = [];
	const moviesCopy = movies.slice();
	if (sortPriority === "myrate") {
		//sort array by myrate
		const sortedRate = sortMyrate({ movies: moviesCopy, sortMethod });
		//compress array into sub array if they have the same myrate value
		const arranged = arrangeWithCommons({
			array: sortedRate,
			method: "myrate"
		});
		//sort the individual sub array according to name
		for (let i = 0; i < arranged.length; i++) {
			sortName({ movies: arranged[i], sortMethod });
		}
		//push all of the sorted array and subarray to sortedMovies
		arranged.map(subArray => {
			subArray.map(arr => {
				sortedMovies.push(arr);
			});
		});

		return sortedMovies;
	} else if (sortPriority === "name") {
		//sort array by name
		const sortedName = sortName({ movies: moviesCopy, sortMethod });
		//compress array into sub array if they have the same name value
		const arranged = arrangeWithCommons({
			array: sortedName,
			method: "name"
		});
		//sort the individual sub array according to name
		for (let i = 0; i < arranged.length; i++) {
			sortMyrate({ movies: arranged[i], sortMethod });
		}
		//push all of the sorted array and subarray to sortedMovies
		arranged.map(subArray => {
			subArray.map(arr => {
				sortedMovies.push(arr);
			});
		});
		return sortedMovies;
	} else {
		if (sortMethod.name.sort !== "") {
			return sortName({ movies, sortMethod });
		} else {
			return sortMyrate({ movies, sortMethod });
		}
	}
}
