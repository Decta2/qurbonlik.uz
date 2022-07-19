import { Router } from "express";
import PostController from "./PostController.js";
const router = new Router()

router.post('/orders', PostController.create)
router.get('/orders', PostController.getAll)
router.get('/orders/:id', PostController.getone)
router.put('/order/:id', PostController.update)
router.delete('/order/:id', PostController.delete)


export default router;