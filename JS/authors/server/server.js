const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');

const AllRoutes = require('./routes/author.routes');
AllRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
