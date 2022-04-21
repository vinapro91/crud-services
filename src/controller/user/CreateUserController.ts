import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "../../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createUserService = container.resolve(CreateUserService);
      const userData = request.body;
      const newUser = await createUserService.execute(userData);
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
