import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");  // Capture input value
  const [userData, setUserData] = useState(null); // Store fetched user data
  const [loading, setLoading] = useState(false);  // Track loading state
  const [error, setError] = useState(false);      // Track error state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);  // Fetch data from GitHub API
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {userData && (
        <div className="mt-4 bg-white shadow-lg rounded p-4">
          <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded-full" />
          <h2 className="text-xl font-bold mt-2">{userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
