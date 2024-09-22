import axios from "axios";

// GitHub API endpoint to fetch user data
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
