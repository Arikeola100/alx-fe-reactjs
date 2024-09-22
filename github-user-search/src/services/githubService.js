import axios from "axios";

// GitHub API endpoint to search users with additional filters
export const fetchUserData = async (username = "", location = "", minRepos = "") => {
  let query = [];


  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join(" ");
  
  // GitHub Search API endpoint
  const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`);
  return response.data;
};

