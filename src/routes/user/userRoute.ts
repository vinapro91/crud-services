import { Express, Router } from "express";

import { CreateUserController } from "../../controller/user/CreateUserController";
import { DeleteUserController } from "../../controller/user/DeleteUserController";
import { RetriveUserController } from "../../controller/user/RetriveUserController";
import { UpdateUserController } from "../../controller/user/UpdateUserController";

const userRoute = (app: Express) => {
  const router = Router();

  const createUserController = new CreateUserController();
  const retriveUserController = new RetriveUserController();
  const updateUserController = new UpdateUserController();
  const deleteUserController = new DeleteUserController();

  router.post("", createUserController.handle);
  router.get("/", retriveUserController.handle);
  router.patch("/:id", updateUserController.handle);
  router.delete("/:id", deleteUserController.handle);

  app.use("/users", router);
};

export { userRoute };
