import { Router } from "express";
import { getUsers, addUser } from "../controllers/users";

const router: Router = Router();

router.get("/users", getUsers);

router.post("/add-user", addUser);

export default router;
