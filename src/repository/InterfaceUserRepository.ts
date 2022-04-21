import { DeleteResult, UpdateResult } from "typeorm";

interface IUserInterface {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  fullName?: string;
  cpf?: string;
  alias?: string;
  gender?: string;
  phone?: string;
  comments?: string;
  profilePicture?: string;
}

interface IUserRepo {
  create: (user: IUserInterface) => Promise<IUserInterface | undefined>;
  findByCpf: (cpf: string) => Promise<IUserInterface | undefined>;
  find: () => Promise<IUserInterface[] | undefined>;
  updateUser: (userData: IUserInterface) => Promise<UpdateResult | undefined>;
  findById: (id: string) => Promise<IUserInterface | undefined>;
  delete: (id: string) => Promise<DeleteResult>;
}

export { IUserInterface, IUserRepo };
