import UserModel from "../../models/User.js";
import UserDetailModel from "../../models/UserDetail.js";
import bcrypt from "bcrypt";

const SignUp = async (req, res) => {
  try {
    // get data
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      gender
    } = req.body;
    // validate
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }
    // check if existing user
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is alredy exist. Please sign in to continue.",
      });
    }

    // check password same or not
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password Does not match",
      });
    }

    // hashing password
    const salt = await bcrypt.genSaltSync(10)
    const hashPassword = await bcrypt.hash(password, salt);

    // create additional details from user
    const userAdditionalDetails = await UserDetailModel.create({
      gender: gender,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
      address: null,
    });

    const user = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      accountType: accountType,
      additionalDetails: userAdditionalDetails._id,
    });

    return res.status(200).json({
      success: true,
      message: "User register successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

export default SignUp;
