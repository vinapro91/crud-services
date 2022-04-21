import { inject, injectable } from "tsyringe";

import {
  IUserInterface,
  IUserRepo,
} from "../repository/InterfaceUserRepository";

@injectable()
class RetriveUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepo
  ) {}

  async execute(): Promise<IUserInterface[] | undefined> {
    const users = await this.userRepository.find();
    if (!users) {
      throw new Error(`No record found`);
    }
    return users;
  }
}

export { RetriveUserService };
