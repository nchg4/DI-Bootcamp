const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
  try {
   const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

module.exports = { fetchPosts };


