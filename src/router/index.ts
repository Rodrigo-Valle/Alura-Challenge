import { Router,  Response, Request } from 'express'
import logger from '../utils/logger';
import UserRoutes from './UserRoutes'
import IncomeRoutes from './IncomeRoutes'
import ExpenseRoutes from './ExpenseRoutes';

const routes = Router();

routes.use(
    async (req: Request, _res: Response, next: () => void): Promise<void> => {
        logger.info(`[API - Request] url: ${req.url}, method: ${req.method}`)
        next();
    }
)

routes.get("/status", (_req: Request, res: Response) => {
    return res.status(200).json({ status: "Running"})
})

routes.use("/user", UserRoutes);
routes.use("/income", IncomeRoutes);
routes.use("/expense", ExpenseRoutes);



export default routes;
