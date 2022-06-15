import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Container, Content } from "./style";
import { toast } from "react-toastify";
import { useRef } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = ({ history }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email invalido!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerUser = (data) => console.log(data);

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

        <Button type="submit" color="secundary">
          Enviar
        </Button>
      </Content>
    </Container>
  );
};
