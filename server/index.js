const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./model/Users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/IT_database");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Return user ID, name, and email along with "Success" message
                    res.json({
                        message: "Success",
                        userId: user._id,
                        userName: user.firstName + " " + user.lastName,
                        userEmail: user.email,
                        profileUrl: user.profileUrl

                    });
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.status(500).json(err));
});


app.post("/register", (req, res) => {
    const { email } = req.body;

    // Check if the email already exists in the database
    UsersModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                // If the user already exists, respond with an error message
                res.status(400).json("User already exists");
            } else {
                // If the user does not exist, create a new user
                UsersModel.create(req.body)
                    .then(newUser => res.json(newUser))
                    .catch(err => res.status(500).json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});

// Endpoint to fetch user profile
app.get("/get-profile", async (req, res) => {
    try {
        const userId = req.query.userId; // Retrieve userId from query parameter
        const user = await UsersModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Return user profile data
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Endpoint to update user profile
app.post("/update-profile", async (req, res) => {
    try {
        const userId = req.query.userId; // Retrieve userId from query parameter
        const updatedData = req.body;
        const existingUser = await UsersModel.findOne({ email: updatedData.email });

        if (existingUser && existingUser._id.toString() !== userId) {
            // If email already exists and belongs to another user, return error
            return res.status(400).json({ error: "Email already exists" });
        }

        const user = await UsersModel.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "Profile updated successfully", user });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});







app.listen(3001, () => {
    console.log("server is running")
})