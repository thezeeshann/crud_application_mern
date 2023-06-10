import UserDetailModel from "../../models/UserDetail.js"


const ReadDocument = async(req,res)=>{
    try {
        const document = await UserDetailModel.find({}).sort({ gender: "ASC" }).exec()
        return res.status(200).json({
            success:true,
            message:"All Documents",
            document
        })
    } catch (error) {
        return res.status().json({
            success:false,
            message:"Can't find the data"
        })
    }
}

export default ReadDocument