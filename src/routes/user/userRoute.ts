import { Express, Router } from "express";

import { CreateUserController } from "../../controller/user/CreateUserController";
import { DeleteUserController } from "../../controller/user/DeleteUserController";
import { RetriveUserController } from "../../controller/user/RetriveUserController";
import { UpdateUserController } from "../../controller/user/UpdateUserController";
import { ValidateShape } from "../../middleware/validateShape";
import { UserShape } from "../../shapes/UserShape";

const userRoute = (app: Express) => {
  const router = Router();

  router.post(
    "",
    new ValidateShape().handle(UserShape),
    new CreateUserController().handle
  );
  router.get("/", new RetriveUserController().handle);
  router.patch(
    "/:id",
    new ValidateShape().handle(UserShape),
    new UpdateUserController().handle
  );
  router.delete("/:id", new DeleteUserController().handle);

  app.use("/users", router);
};

export { userRoute };
