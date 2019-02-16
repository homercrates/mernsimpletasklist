const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// tell it where items is
const items = require('./routes/api/items');


const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// DataBase CONFIG
const db = require('./config/keys').mongoURI;

// connect to MONGODB
mongoose
    .connect(db, {useNewUrlParser:true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// USE ROUTES  anything using /api/items will refer to the `const items` above route
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));