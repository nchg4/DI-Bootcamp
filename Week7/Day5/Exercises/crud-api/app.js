const express = require('express');
const { fetchPosts } = require('./data/dataService'); 

const app = express();
const port = 5002;


app.get('/', (req, res) => {
  res.send('Server 5002 is running on this device. No errors have been encountered');
});


app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts(); 
    console.log('Data has been successfully retrieved and sent as a response.'); // Print a message to the console
    res.json(posts); 
  } catch (error) {
    console.error('Error fetching posts:', error); 
    res.status(500).send('Error fetching posts');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
