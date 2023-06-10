import UserModel from "../../models/User.js";
import bcrypt from "bcrypt";

const LogIn = async (req, res) => {
  try {
    // fetch data
    const { email, password } = req.body;
    // validate
    if (!email || !password) {
      return res.status().json({
        success: false,
        message: "All fields are required",
      });
    }
    // check if user exist
    const existUser = await UserModel.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        success: false,
        message: "User not register",
      });
    }
    if (await bcrypt.compare(password, existUser.password)) {
        console.log("Password correct")
    } else {
      // password does not match
      res.status(404).json({
        success: false,
        message: "Password incorrect",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {}
};

export default LogIn;
