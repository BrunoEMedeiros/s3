require('dotenv').config();

const express =  require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://192.168.0.106:27017/uploads', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);