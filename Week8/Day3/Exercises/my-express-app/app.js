const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const readTasks = () => {
  const data = fs.readFileSync('tasks.json', 'utf8');
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
};

app.get('/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.post('/tasks', (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title: req.body.title,
    completed: req.body.completed || false
  };

  if (!newTask.title) {
    return res.status(400).send('Title is required');
  }

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    task.title = req.body.title || task.title;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

    if (!task.title) {
      return res.status(400).send('Title is required');
    }

    writeTasks(tasks);
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const updatedTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  if (tasks.length === updatedTasks.length) {
    return res.status(404).send('Task not found');
  }
  writeTasks(updatedTasks);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
