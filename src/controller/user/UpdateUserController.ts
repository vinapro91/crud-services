import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserServices } from "../../services/UpdateUserServices";

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const updateUserService = container.resolve(UpdateUserServices);
      const userData = request.body;
      userData.id = request.params.id;
      const newUser = await updateUserService.execute(userData);
      return response.status(201).send(newUser);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          message: error.message || "Unexpected error.",
        });
      }
      return response.status(500).json({ Error: "Unexpected error." });
    }
  }
}
