import UserDetailModel from "../../models/UserDetail.js";


const createDocument = async(req,res)=>{
    try {
        const {gender,dateOfBirth,about,contactNumber,address} = req.body
        if(!contactNumber || !dateOfBirth){
            return res.status(400).json({
                success:true,
                message:"All fields are required"
            })
        }
        if(gender === "Male" || gender === "Female"){
            console.log("everything is right")
        }else{
            return res.json({
                success:false,
                message:"Please choose correct gender"
            })
        }

        // create doc
        const userDetails = await UserDetailModel.create({
            gender:gender,
            dateOfBirth:dateOfBirth,
            about:about,
            contactNumber:contactNumber,
            address:address
        })
        return res.status(200).json({
            success:true,
            message:"Document created successfully",
            userDetails
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to create user document"
        })
    }
}

export default createDocument