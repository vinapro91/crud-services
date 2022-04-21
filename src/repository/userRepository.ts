import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { IUserInterface, IUserRepo } from "./InterfaceUserRepository";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  create = (user: IUserInterface) =>
    this.ormRepository.save(user) as Promise<IUserInterface>;
  findByCpf = (cpf: string) => this.ormRepository.findOne({ cpf });
  findById = (id: string) => this.ormRepository.findOne(id);
  find = () => this.ormRepository.find();
  updateUser = (userData: IUserInterface) =>
    this.ormRepository
      .createQueryBuilder()
      .update(User)
      .set(userData)
      .where("id = :id", { id: userData.id })
      .execute();
  delete = (id: string) => this.ormRepository.delete(id);
}

export { UserRepository };
