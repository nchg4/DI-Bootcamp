const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes.js'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', postRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error' });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

