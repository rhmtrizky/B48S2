import * as express from "express"
import { Request, Response } from "express"
import ThreadsController from "../controllers/ThreadsController"
import Authenticate from "../middlerwares/AuthMiddleware"
import AuthController from "../controllers/AuthController"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World!!")
})

// router.get("/threads", ThreadsController.find)
router.get("/threads", Authenticate, ThreadsController.find)
router.post("/threads", Authenticate,ThreadsController.create)
router.get("/thread/:id", ThreadsController.findOne)
router.get("/thread/delete/:id", ThreadsController.delete)
router.patch("/thread/update/:id", ThreadsController.update)



router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.get("/check", Authenticate, AuthController.check)



// router.get("/testing", (req: Request, res: Response) => { 
//     res.send("Hello World!")
// })

export default router