import { inject, injectable } from "tsyringe";

import {
  IUserInterface,
  IUserRepo,
} from "../repository/InterfaceUserRepository";

interface IRequest {
  id: string;
  fullName: string;
  cpf: string;
  alias: string;
  gender: string;
  phone: string;
  comments: string;
  profilePicture: string;
}
@injectable()
class UpdateUserServices {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepo
  ) {}

  async execute(userData: IRequest): Promise<IUserInterface | undefined> {
    await this.userRepository.updateUser(userData);
    const user = await this.userRepository.findById(userData.id);
    return user;
  }
}

export { UpdateUserServices };
