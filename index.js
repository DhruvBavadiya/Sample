const express = require("express");
const mongoconnect = require("./db")
const errorMiddleware = require("./Middleware/errors")
const dotenv = require("dotenv");
dotenv.config({path : "F:/dhruv/webd/practice/SAMPLE HERE/Backend/config/config.env"})

var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
const text = require("./controller/sampleroute")

mongoconnect();

app.use("/app/vr1",text)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


// http://localhost:5000/app/vr1/updatetext/651ed4c32f6f60cc42d65759  update api