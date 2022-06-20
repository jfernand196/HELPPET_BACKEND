const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
// connect to mongodb
mongoose.connect('mongodb://0.0.0.0:27017/HELPPET', { useNewUrlParser: true });
// middleware
app.use(express.json());
// routes

// start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    }
);



