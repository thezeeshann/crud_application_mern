import express from "express"
import SignUp from "../controllers/auth/signup.js"
import LogIn from "../controllers/auth/Login.js"
import createDocument from "../controllers/UserDetail/CreateController.js"
import ReadDocument from "../controllers/UserDetail/ReadController.js"
import getSingleDocument from "../controllers/UserDetail/GetSingalController.js"
import deleteDoc from "../controllers/UserDetail/DeleteController.js"
import updateDocument from "../controllers/UserDetail/updateController.js"


const router = express.Router()
// auth
router.post("/signup",SignUp)
router.post("/login",LogIn)

// crud
router.post("/create",createDocument)
router.get("/read",ReadDocument)
router.get("/single/:id",getSingleDocument)
router.post("/delete/:id",deleteDoc)
router.put("/update/:id",updateDocument)


export default router