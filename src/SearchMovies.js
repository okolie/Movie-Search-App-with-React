import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovies = async (event) => {
		event.preventDefault();
		// const query = "Jurassic Park";
		const url = `https://api.themoviedb.org/3/search/movie?api_key=d878311b9e5a0543470163cb6fbddf47&language=en-US&query=${query}&page=1&include_adult=false`;
		// process.env.REACT_APP_API_KEY
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			setMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<form className="form" onSubmit={searchMovies}>
				<label htmlFor="query" className="label">
					Movie Name
				</label>
				<input
					type="text"
					id="query"
					placeholder="Movie Name"
					className="input"
					onChange={(event) => setQuery(event.target.value)}
					value={query}
				/>
				<button type="submit" className="button">
					Search
				</button>
			</form>
			<MovieCard movies={movies} />
		</div>
	);
}
export default SearchMovies;
