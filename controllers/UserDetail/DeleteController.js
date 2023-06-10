import UserDetailModel from "../../models/UserDetail.js"

const deleteDoc = async(req,res)=>{
    try {
        const id = req.params.id
        await UserDetailModel.findByIdAndDelete(id)
        return res.status(200).json({
            success:true,
            message:"Data deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"failed to delete document"
        })
    }
}

export default deleteDoc