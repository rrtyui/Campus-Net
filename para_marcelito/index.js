const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://user:password@localhost:5432/database');
const express = require('express');
const app = express();
const port = 3000;

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role_type: {
    type: Sequelize.STRING,
    allowNull:false
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      role_type: req.body.role_type,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
  try {
    await sequelize.sync();
    console.log('User table created successfully');
  } catch (error) {
    console.error(error.message);
  }
});