/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

import { IUserInterface } from "../repository/InterfaceUserRepository";

declare global {
  namespace Express {
    export interface Request {
      validate: IUserInterface;
    }
  }
}
