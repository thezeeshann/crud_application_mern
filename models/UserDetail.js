import mongoose from "mongoose"

const UserDetailSchema = new mongoose.Schema({
    gender: {
        type: String,
        enum:["Male","Female"]
      },
      dateOfBirth: {
        type: String,
      },
      about: {
        type: String,
        trim: true,
      },
      contactNumber: {
        type: Number,
        trim: true,
      },
      address: {
        type: String,
      },
})


const UserDetailModel = mongoose.model("UserDetail",UserDetailSchema)
export default UserDetailModel