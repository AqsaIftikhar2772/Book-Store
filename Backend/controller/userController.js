import User from "../modal/userModal.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "user have already exist" });
    }
    const bcryptPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: bcryptPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "user creadted Succesfully" , user:{
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    } });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      res.json({
        message: "Login Successfuly",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Erorr:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
