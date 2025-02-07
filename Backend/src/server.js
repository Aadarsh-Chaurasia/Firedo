import express from 'express';
import cors from 'cors';
import { reqHandler } from './app.js';

const app = express();
const PORT = 3000;

// Enable CORS middleware to allow frontend to make requests
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// API routes
app.post('/api', (req, res) => {
    reqHandler(req, res);
});


// Start server
app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT);
});