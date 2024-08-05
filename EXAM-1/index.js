const express = require('express');

const cors = require('cors');
const dbconnect = require("./config/db");
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users",userRouter);
app.use("/tasks",taskRouter);

app.get("/", (req, res) => {
    res.send("START......");
})

app.listen(PORT, () => {
    console.log("YOUR PORT NUMBER IS  9090");
    dbconnect();
})