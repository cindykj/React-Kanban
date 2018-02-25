const express = require(`express`);
const app = express();
const bodyParser = require('body-parser');


const knex = require(`./db/knex`)
const cardRoutes = require(`./routes/card`);


const PORT = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public')); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/kanban', cardRoutes);


//smoke test
app.get(`/`, (req, res) => {
  console.log(`smoke test`)
  return res.send(`smoke test`);
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Server is now connected to ${PORT}`);
})