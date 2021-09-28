import { Button } from "@material-ui/core/";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Register, FormLabel, ButtonSubmit, Error } from "./style";
import { useHistory } from "react-router-dom";
const Form = () => {
  const formSchema = yup.object().shape({
    nome: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        "Coloque apenas letras"
      ),
    email: yup.string().required("Campo obrigatório").email(),
    senha: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Deve conter 8 Characters, Um Maiusculo, Um número e um Character especial"
      ),
    confirmacaoSenha: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("senha"), null], "Senhas são diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const history = useHistory();

  const onSubmitFunction = (data) => {
    history.push(`/Logged/${data.nome}`);
  };
  return (
    <Register onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <FormLabel placeholder="Nome" {...register("nome")} />
        <Error>{errors.nome?.message}</Error>
      </div>

      <div>
        <FormLabel placeholder="Email" {...register("email")} />
        <Error>{errors.email?.message}</Error>
      </div>
      <div>
        <FormLabel placeholder="Senha" {...register("senha")} />
        <Error>{errors.senha?.message}</Error>
      </div>

      <div>
        <FormLabel
          placeholder="Confirme sua senha"
          {...register("confirmacaoSenha")}
        />
        <Error>{errors.confirmacaoSenha?.message}</Error>
      </div>

      <Button variant="contained" type="submit">
        Registrar
      </Button>
    </Register>
  );
};

export default Form;
