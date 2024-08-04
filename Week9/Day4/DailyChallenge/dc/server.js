const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello From Express" });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.json({ message: `I received your POST request. This is what you sent me: ${req.body.message}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});