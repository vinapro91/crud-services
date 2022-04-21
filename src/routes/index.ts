import { Express } from "express";

import { userRoute } from "./user/userRoute";

const Routes = (app: Express) => {
  userRoute(app);
};
export { Routes };
