const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const dbconnect = async () => {
    await dbconnect.connect(process.env.MVC_MESSAGE);
    console.log("YOUR DATABASE IS CONNECTED");
    
};

module.exports = dbconnect;