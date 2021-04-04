const http = require('http');
const {
  getAllUsers,
  searchUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/usersController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    getAllUsers(req, res);
  } else if (req.url.match(/\/api\/users\/([a-z]+)/) && req.method === 'GET') {
    const name = req.url.split('/')[3];
    searchUser(req, res, name);
  } else if (req.url === '/api/users' && req.method === 'POST') {
    createUser(req, res);
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updateUser(req, res, id);
  } else if (
    req.url.match(/\/api\/users\/([0-9]+)/) &&
    req.method === 'DELETE'
  ) {
    const id = req.url.split('/')[3];
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

module.exports = server;
