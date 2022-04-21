import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserServices } from "../../services/DeleteUserServices";

export class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const deleteUserService = container.resolve(DeleteUserServices);
      const { id } = request.params;
      await deleteUserService.execute(id);
      return response.status(204).json();
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
