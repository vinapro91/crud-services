import { inject, injectable } from "tsyringe";

import {
  IUserInterface,
  IUserRepo,
} from "../repository/InterfaceUserRepository";

interface IRequest {
  fullName: string;
  cpf: string;
  alias: string;
  gender: string;
  phone: string;
  comments: string;
  profilePicture: string;
}
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
