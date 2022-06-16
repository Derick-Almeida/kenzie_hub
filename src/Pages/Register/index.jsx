import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Container, Content } from "./style";
import { toast } from "react-toastify";

import { PublicRoute } from "../../Services/Api";
import { Redirect } from "react-router-dom";
import { useState, useRef } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = ({ history, loged }) => {
  const [course, setCourse] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .min(3, "Mínimo de 3 caracteres"),
    email: yup.string().required("Campo obrigatório!").email("Email invalido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 caracteres"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferente")
      .required("Campo obrigatório!"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
  });

  const options = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerUser = (data) => {
    const { name, email, password, bio, contact, course_module } = {
      ...data,
      course_module: course,
    };

    const user = { name, email, password, bio, contact, course_module };

    PublicRoute.post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          return history.push("/");
        }, 2000);
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  if (loged) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <header>
        <h1>Kenzie Hub</h1>
        <Button onClick={() => history.push("/")}>Voltar</Button>
      </header>
      <Content>
        <form onSubmit={handleSubmit(registerUser)}>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>

          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            name="name"
            type="text"
            register={register}
            error={errors.name?.message}
          />

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

          <Input
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            name="passwordConfirm"
            type="password"
            register={register}
            error={errors.passwordConfirm?.message}
          />

          <Input
            label="Bio"
            placeholder="Fale sobre você"
            name="bio"
            type="text"
            register={register}
            error={errors.bio?.message}
          />

          <Input
            label="Contato"
            placeholder="Opção de contato"
            name="contact"
            type=""
            register={register}
            error={errors.contact?.message}
          />

          <Input
            label="Selecionar módulo"
            icon={MdOutlineKeyboardArrowDown}
            disabled
            name="course_module"
            type="text"
            register={register}
            error={errors.course_module?.message}
            options={options}
            setState={setCourse}
            value={course}
          >
            <ul ref={options} className="hidden">
              <li>Primeiro módulo (Introdução ao Frontend)</li>
              <li>Segundo módulo (Frontend Avançado)</li>
              <li>Terceiro módulo (Introdução ao Backend)</li>
              <li>Quarto módulo (Backend Avançado)</li>
            </ul>
          </Input>

          <Button type="submit" color="primary">
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};
