import * as express from "express"
import { Request, Response } from "express"
import ThreadsController from "../controllers/ThreadsController"
import authenticate from "../middlerwares/AuthMiddleware"
import AuthController from "../controllers/authController"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World!!")
})

router.get("/thread", ThreadsController.find)
router.get("/thread", authenticate, ThreadsController.find)
router.post("/thread", ThreadsController.create)
router.get("/thread/:id", ThreadsController.findOne)
router.get("/thread/delete/:id", ThreadsController.delete)
router.patch("/thread/update/:id", ThreadsController.update)



router.post("/register", AuthController.register)
router.post("/login", AuthController.login)



// router.get("/testing", (req: Request, res: Response) => { 
//     res.send("Hello World!")
// })

export default router