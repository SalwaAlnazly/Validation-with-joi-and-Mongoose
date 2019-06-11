const app = require('express')();
const path = require('path');
const morgan = require('morgan');


const PORT = process.env.PORT || 8000

const mongoose = require('mongoose');


mongoose.connect(require('./config/keys.js').mongodb.dashUrl);

const routes = require('./routes/users');
const bodyParser = require('body-parser');

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api', routes);

http.listen(PORT, () => console.log(`APP RUNNING ON PORT : ${PORT}`));
