
import express from 'express';
import bodyparser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/LoginApi.js';


const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use("/api/user", route);



// MongoDB Connection and start server
const uri = process.env.MONGODB_URI
mongoose.connect(uri)
        .then(() => {
           console.log("MongoDB database connection established successfully");
           app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
        
})
        .catch((error) => console.log(error))

// Routes
// Example route
app.get('/', (req, res) => {
    res.send('Hello from Express.js backend');
});


