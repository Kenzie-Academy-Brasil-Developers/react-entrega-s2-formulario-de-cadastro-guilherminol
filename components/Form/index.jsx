import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const Form = () => {
  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    senha: yup
      .string()
      .required()
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Deve conter 8 Characters, Um Maiusculo, Um número e um Character especial"
      ),
    confirmacaoSenha: yup
      .string()
      .required()
      .oneOf([yup.ref("senha"), null], "Senhas são diferentes"),
  });

  const {
    resolver,
    handleForm,
    formState: { error },
  } = useForm({ resolver: yupResolver(formSchema) });
};
