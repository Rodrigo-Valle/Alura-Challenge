import { Router } from "express";
import userRoutes from "./UserRouter"

const routes = Router();

routes.use("/user", userRoutes);

export default routes;