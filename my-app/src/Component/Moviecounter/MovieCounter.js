import { useEffect, useState } from "react";
const MovieCounter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieCount, setMovieCount] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch movies count
  const getNumberOfMovies = async (substr) => {
    try {
      // Make the GET request using fetch
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Set the count based on the `total` field in the response
      setMovieCount(data.total);
    } catch (err) {
      setError("Error fetching movie data");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    getNumberOfMovies(searchTerm);
  };

  return (
    <div>
      <h1>Movie Counter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>
      {movieCount !== null && <p>Total movies found: {movieCount}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
export default MovieCounter;
