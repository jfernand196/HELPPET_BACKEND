const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

// import routes api
const userRoutes = require('./api/users');
const foundationRoutes = require('./api/foundations');
const petRoutes = require('./api/pets');
const payment = require('./api/payment');
const upload = require('./api/upload');

const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
// connect to mongodb
mongoose.connect('mongodb://0.0.0.0:27017/HELPPET', { useNewUrlParser: true });
// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// routes
app.use('/api/users', userRoutes);
app.use('/api/payment', payment);
app.use('/api/foundations', foundationRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/upload', upload);
// start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    }
);



