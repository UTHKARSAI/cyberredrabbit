require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

// Home Route
app.get("/", (req, res) => {
    res.send("CyberRedRabbit Backend Running");
});

// Test API Route
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API Working Successfully"
    });
});

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// User Model
const User = mongoose.model("User", userSchema);

// Add User Route
app.get("/add", async (req, res) => {
    try {
        const user = new User({
            name: "Uthkar",
            email: "uthkar@test.com"
        });

        await user.save();

        res.json({
            success: true,
            message: "User Added Successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Get All Users Route
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.json({
            success: true,
            users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});