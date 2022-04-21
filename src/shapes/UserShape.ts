import * as yup from "yup";

const UserShape = yup.object().shape({
  fullName: yup.string(),
  email: yup.string(),
  cpf: yup.string(),
  alias: yup.string(),
  gender: yup.string(),
  phone: yup.string(),
});

export { UserShape };
