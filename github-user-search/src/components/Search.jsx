import React, { useState } from "react";
import { fetchUsersByCriteria } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUsersByCriteria(username, location, minRepos);  // Fetch based on new criteria
      setUsers(data.items);  // GitHub API Search response is structured with "items"
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Advanced GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-1 gap-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username "
        />
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location "
        />
        <input
          type="number"
          className="border p-2 rounded w-full"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum number of repositories"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the users based on your criteria.</p>}
      {users.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white shadow-lg rounded p-4 flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-xl font-bold">{user.login}</h2>
                <p>
                  <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
                    Visit GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
