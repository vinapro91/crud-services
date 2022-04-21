import { container } from "tsyringe";

import { IUserRepo } from "../../repository/InterfaceUserRepository";
import { UserRepository } from "../../repository/userRepository";

container.registerSingleton<IUserRepo>("UserRepository", UserRepository);
