import { Request, Response } from "express";
import { container } from "tsyringe";

import { RetriveUserService } from "../../services/RetriveUserService";

export class RetriveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const retriveUserService = container.resolve(RetriveUserService);
      const newUser = await retriveUserService.execute();
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
