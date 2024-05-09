import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Function to generate a JWT token
const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d", // Token expiration time set to 15 days
    });
};

// Function for user registration
export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;
    try {
        let user = null;
        // Check if the user is registering as a patient or a doctor
        if (role == 'patient') {
            user = await User.findOne({ email }); // Find existing user with the same email
        } else if (role == 'doctor') {
            user = await Doctor.findOne({ email }); // Find existing doctor with the same email
        }

        // Check if user already exists
        if (user) {
            return res.status(400).json({ message: 'User already exists' }); // Return error if user already exists
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt); // Hash the password using bcrypt

        // Create a new user based on the role
        if (role == 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else if (role == 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }
        await user.save(); // Save the new user to the database

        // Generate a JWT token for the newly registered user
        const token = generateToken(user);

        // Respond with success message and the generated token
        res.status(200).json({ success: true, message: 'User successfully created', token });

    } catch (err) {
        console.error(err); // Log any errors for debugging
        res.status(500).json({ success: false, message: 'Internal server error, try again' }); // Return internal server error if something goes wrong
    }
};

// Function for user login
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user in both User and Doctor collections based on the provided email
        const user = await User.findOne({ email }) || await Doctor.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" }); // Return error if user not found
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: "Invalid password" }); // Return error if passwords don't match
        }

        // Generate token
        const token = generateToken(user); // Generate a JWT token for the user

        // Prepare user data for response, excluding sensitive information
        const { password: pwd, __v, ...userData } = user.toObject();

        // Respond with success message, user data, and the generated token
        res.status(200).json({ status: true, message: "Successfully login", data: { ...userData, token } });

    } catch (err) {
        console.error(err); // Log any errors for more detailed debugging
        res.status(500).json({ status: false, message: "Failed to login" }); // Return internal server error if something goes wrong
    }
};
