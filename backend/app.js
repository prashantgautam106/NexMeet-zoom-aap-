import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import cors from "cors";
import { connectToSocket } from "./src/controllers/socketManager.js";
import userRoutes from "./src/routes/users.route.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);


const start = async () => {
    const connectionDB = await mongoose.connect("mongodb+srv://prashantgautam106:Prashant0312@cluster0.72z6pjy.mongodb.net/");
    console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log(`server is running on 8000`)
    });
}

start();