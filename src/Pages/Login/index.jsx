import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content } from "./style";

import { PublicRoute } from "../../Services/Api";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = ({ history, loged, setLoged }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email invalido!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerUser = (data) => {
    PublicRoute.post("/sessions", data)
      .then((res) => {
        toast.success("Login efetuado com sucesso");
        localStorage.setItem(
          "@KenzieHub:token",
          JSON.stringify(res.data.token)
        );
        localStorage.setItem("@KenzieHub:user", JSON.stringify(res.data.user));
        setLoged(true);
        setTimeout(() => {
          return history.push("/home");
        }, 2000);
      })
      .catch((_) => toast.error("Email ou senha invalidos!"));
  };

  if (loged) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <header>
        <h1>Kenzie Hub</h1>
      </header>
      <Content>
        <form onSubmit={handleSubmit(registerUser)}>
          <h2>Login</h2>

          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            name="email"
            type="text"
            register={register}
            error={errors.email?.message}
          />

          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <Button type="submit" color="primary">
            Enviar
          </Button>
        </form>

        <span>Ainda não possui uma conta?</span>

        <Button onClick={() => history.push("/register")} color="secundary">
          Cadastre-se
        </Button>
      </Content>
    </Container>
  );
};
