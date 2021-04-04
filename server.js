const server = require('./routes/usersRoute');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  db.authenticate()
    .then(() => {
      console.log('Database connected');
      console.log(`Server is running on PORT: ${PORT}`);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});
