import { inject, injectable } from "tsyringe";

import { IUserRepo } from "../repository/InterfaceUserRepository";

@injectable()
class DeleteUserServices {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepo
  ) {}

  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}

export { DeleteUserServices };
