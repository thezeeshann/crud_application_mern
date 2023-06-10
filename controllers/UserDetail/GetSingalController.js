import UserDetailModel from "../../models/UserDetail.js"


const getSingleDocument = async(req,res)=>{
    try {
        const id = req.params.id;
        const singleData = await UserDetailModel.findById(id)
        return res.status(200).json({
            success:true,
            message:"Data Fetch successfully",
            singleData
        })
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Failed to fetch document"
        })
    }
}

export default getSingleDocument