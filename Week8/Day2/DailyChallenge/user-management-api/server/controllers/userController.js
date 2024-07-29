const knex = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password, email, first_name, last_name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await knex.transaction(async trx => {
      await trx('users').insert({ email, username, first_name, last_name });
      await trx('hashpwd').insert({ username, password: hashedPassword });
    });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await knex('hashpwd').where({ username }).first();
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await knex('users').select();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await knex('users').where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, first_name, last_name } = req.body;

  try {
    await knex('users').where({ id }).update({ email, first_name, last_name });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};