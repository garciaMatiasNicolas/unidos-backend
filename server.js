import express from "express";
import route from "./routes/Routes.js";
import cors from 'cors';
const app = express();
const PORT = 8080;

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use('/api', route);

app.listen(PORT, console.log('servidor corriendo'));
