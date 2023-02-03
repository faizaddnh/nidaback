const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const imageRouter = require('./routes/imageRoutes');
const uploadRouter = require('./routes/uploadRoutes');
//const Image = require('./model/model');
const port = process.env.PORT || 2222;

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('DATABASE connected');
})
    .catch((err) => {
        console.log(err.message);
    });


app.use(cors())
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use('/api/upload', uploadRouter);
app.use('/api/images', imageRouter);





app.listen(port, () => {
    console.log('SERVER RUNNING ON PORT = 2222')

})
