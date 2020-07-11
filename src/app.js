const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
// CONNECT DB
require('./config/db')

// db
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err + ' ');
//   });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Home');
})
app.use('/todo', require('./routes/Todo'))

app.listen(PORT, () => {
  console.log("ok");
});

