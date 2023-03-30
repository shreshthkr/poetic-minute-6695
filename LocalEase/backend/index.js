const express = require('express')
require('dotenv').config()

const cors = require('cors');
const { AdminRouter } = require('./routes/Admin.routes');
const { UserRouter } = require('./routes/User.routes');
const { connection } = require('./db');
const port = process.env.port


const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send({ msg: "Welcome to LocalEase Product" });
});

app.use("/admin", AdminRouter)
app.use('/user', UserRouter)

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err)
        console.log("Not Connected to DB");
    }
    console.log(`Server is running on port ${port}`);
});