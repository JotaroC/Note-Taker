// Dependencies
const express = require('express');

const APIRouter = require('./routes/APIRoutes');
const HTMLRouter = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(APIRouter);
app.use(HTMLRouter);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
