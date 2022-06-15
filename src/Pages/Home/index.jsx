import { Button } from "../../components/Button";
import { Header, TechList, Content } from "./style";

import { Redirect } from "react-router-dom";
import { useState } from "react";

import { MdAdd } from "react-icons/md";

import { DiJsBadge } from "react-icons/di";
import { FaReact, FaPython } from "react-icons/fa";

export const Home = ({ history, loged, setLoged }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")));

  const logout = () => {
    localStorage.clear();
    setLoged(false);
    history.push("/");
  };

  if (!loged) {
    return <Redirect to="/" />;
  }
  console.log(user);

  return (
    <>
      <Header>
        <nav>
          <h1>Kenzie Hub</h1>
          <Button onClick={logout}>Sair</Button>
        </nav>
        <header>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </header>
      </Header>

      <TechList>
        <div>
          <p>Tecnologias</p>
          <MdAdd />
        </div>
        <ul className="tech__list">
          {user.techs?.map((tech) => (
            <li key={tech.id}>
              {tech.title}
              <span>{tech.status}</span>
            </li>
          ))}
          {user.techs.length === 0 && (
            <Content>
              <div>
                <DiJsBadge />
                <FaReact />
                <FaPython />
              </div>
              <p>Você ainda não possui uma lista de Tecnologias</p>
            </Content>
          )}
        </ul>
      </TechList>
    </>
  );
};
