const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersFilePath = path.join(__dirname, 'users.json');

// Middleware to read users from JSON file
const readUsersFromFile = () => {
    if (!fs.existsSync(usersFilePath)) {
        fs.writeFileSync(usersFilePath, JSON.stringify([]));
    }
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
};

// Middleware to write users to JSON file
const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Register route
app.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    const users = readUsersFromFile();

    // Check if username or email already exists
    if (users.find(user => user.username === username || user.email === email)) {
        return res.status(400).send({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        lastName,
        email,
        username,
        password: hashedPassword,
    };

    users.push(newUser);
    writeUsersToFile(users);

    res.status(201).send({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFromFile();

    const user = users.find(user => user.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ message: 'Invalid username or password' });
    }

    res.status(200).send({ message: 'Login successful' });
});

// Get all users
app.get('/users', (req, res) => {
    const users = readUsersFromFile();
    res.status(200).json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const users = readUsersFromFile();
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).json(user);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
    const users = readUsersFromFile();
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found' });
    }

    const { name, lastName, email, username, password } = req.body;
    const updatedUser = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        lastName: lastName || users[userIndex].lastName,
        email: email || users[userIndex].email,
        username: username || users[userIndex].username,
        password: password ? bcrypt.hashSync(password, 10) : users[userIndex].password,
    };

    users[userIndex] = updatedUser;
    writeUsersToFile(users);

    res.status(200).send({ message: 'User updated successfully' });
});

// Serve static HTML files and JavaScript
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});