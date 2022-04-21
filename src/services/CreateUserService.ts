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
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepo
  ) {}

  async execute(userData: IRequest): Promise<IUserInterface | undefined> {
    const userAlreadyExists = await this.userRepository.findByCpf(userData.cpf);
    if (userAlreadyExists) {
      throw new Error(`User cpf:${userData.cpf} already exists`);
    }
    return this.userRepository.create(userData);
  }
}

export { CreateUserService };
