import express from 'express';
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";

const app = express();
app.get("/", (req, res) => res.send("Hello World from server!"));

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => console.log('Server is running'));

    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}
startServer();






