import { Button, TextField } from "@material-ui/core/";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Form = () => {
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
    register,
    handleForm,
    formState: { error },
  } = useForm({ resolver: yupResolver(formSchema) });
  return (
    <form>
      <TextField
        required
        label="Nome"
        size="small"
        variant="filled"
        {...register("nome")}
      />
      <TextField
        required
        label="Email"
        size="small"
        variant="filled"
        {...register("email")}
      />
      <TextField
        required
        label="Senha"
        size="small"
        variant="filled"
        {...register("senha")}
      />
      <TextField
        required
        label="Confirme sua senha"
        size="small"
        variant="filled"
        {...register("confirmacaoSenha")}
      />
    </form>
  );
};

export default Form;
