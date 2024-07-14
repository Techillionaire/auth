const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require("./config/db")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const authRoutes = require("./routes/authRoutes")
const cookieParser = require('cookie-parser');
const cors = require('cors');

connectDB()



// Middleware to parse JSON payloads, cookies and cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors());

app.get("/api", (req, res)=> {
    res.json({ message: "welcome to UPWEALTH API"})
})

// Routes
app.use('/api/users', authRoutes);


// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started successfully on http://localhost:${PORT}/`);
});