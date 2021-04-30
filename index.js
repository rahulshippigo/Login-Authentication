const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("SECRET_KEY", config.SERET_KEY);

const routes = require('./routes');
app.use('/', routes);

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(config.MONGO_URL, mongoOptions, (err) => {
    if (err) console.log(err);
    else console.log("DB Connected");
});

app.listen(config.PORT, () => {
    console.log("Server is Running on port", config.PORT);
});