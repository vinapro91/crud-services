import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

export class validateShape {
  handle =
    (shape: AnySchema) =>
    async (
      request: Request,
      response: Response,
      next: NextFunction
    ): Promise<void | Response> => {
      try {
        request.validate = await shape.validate(request.body);
        return next();
      } catch (error: any) {
        return response.status(400).json({ error: error.errors });
      }
    };
}
