const User = require("../models/User"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    console.log("🔹 Register API Called"); 
    console.log("Request Data:", req.body); 

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(" Error in register API:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(" Login API Called");
    console.log("Request Data:", req.body);

    const { email, password } = req.body;

    // 🔍 Check if email & password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // 🔍 Find user in database
    const user = await User.findOne({ email });
    if (!user) {
      console.log(" User not found:", email);
      return res.status(400).json({ message: "User not found" });
    }

    // 🔍 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(" Invalid password for:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🔍 Generate token
    if (!process.env.JWT_SECRET) {
      console.log(" JWT_SECRET is missing in .env file");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log(" Login successful for:", email);
    res.status(200).json({ token });
  } catch (error) {
    console.error(" Error in login API:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.refreshToken = async (req, res) => {
  res.status(200).json({ message: "Refresh token logic not implemented yet" });
};
