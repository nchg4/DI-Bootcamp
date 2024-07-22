const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postRoutes = require('./routes/postRoutes');

app.use(bodyParser.json());
app.use('/api/books', postRoutes);

const port = 5003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

