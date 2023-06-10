import UserDetailModel from "../../models/UserDetail.js"

const updateDocument = async (req,res)=>{
    try {
        const id = req.params.id
        const {gender,dateOfBirth,about,contactNumber,address} = req.body
        // if(!gender || dateOfBirth|| !address){
        //     return res.status(400).json({
        //         success:false,
        //         message:"All fields required"
        //     })
        // }
        const updateData = await UserDetailModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
            success: true,
            message:"Data updated successfully",
            updateData
        });
    } catch (error) {
        res.status(500).json({
			success: false,
			message: "Something wrong while update data",
		});
    }
}

export default updateDocument