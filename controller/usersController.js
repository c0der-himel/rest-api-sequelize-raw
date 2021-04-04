const User = require('../model/User');
const { Op } = require('sequelize');

const getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      console.log(users);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const { name, age } = JSON.parse(body);

    User.create({
      name,
      age,
    })
      .then((users) => {
        console.log(users);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const searchUser = (req, res, name) => {
  User.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%',
      },
    },
  })
    .then((users) => {
      console.log(users);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (req, res, id) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const { name, age } = JSON.parse(body);

    User.update(
      {
        name,
        age,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then((users) => {
        console.log(users);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const deleteUser = (req, res, id) => {
  User.destroy({
    where: {
      id: id,
    },
  })
    .then((users) => {
      console.log(users);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllUsers,
  createUser,
  searchUser,
  updateUser,
  deleteUser,
};
