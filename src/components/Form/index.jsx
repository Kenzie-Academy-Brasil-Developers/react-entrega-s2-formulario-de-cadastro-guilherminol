import { Button, TextField } from "@material-ui/core/";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Form = ({ setIsLogged, isLogged }) => {
  const formSchema = yup.object().shape({
    nome: yup
      .string()
      .required("Nome Obrigatório")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        "Coloque apenas letras"
      ),
    email: yup.string().required("Email Obrigatório").email(),
    senha: yup
      .string()
      .required()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Deve conter 8 Characters, Um Maiusculo, Um número e um Character especial"
      ),
    confirmacaoSenha: yup
      .string()
      .required()
      .oneOf([yup.ref("senha"), null], "Senhas são diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const onSubmitFunction = (data) => {
    setIsLogged(true);
    console.log("a");
  };
  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        required
        error={errors.nome?.message}
        label="Nome"
        size="small"
        variant="filled"
        helperText={errors.nome?.message}
        {...register("nome")}
      />
      <TextField
        required
        error={errors.email?.message}
        label="Email"
        size="small"
        variant="filled"
        helperText={errors.email?.message}
        {...register("email")}
      />
      <TextField
        required
        error={errors.senha?.message}
        label="Senha"
        size="small"
        variant="filled"
        helperText={errors.senha?.message}
        {...register("senha")}
      />
      <TextField
        required
        error={errors.confirmacaoSenha?.message}
        label="Confirme sua senha"
        size="small"
        variant="filled"
        helperText={errors.confirmacaoSenha?.message}
        {...register("confirmacaoSenha")}
      />
      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default Form;
