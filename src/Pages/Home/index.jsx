import { Header, TechList, Content } from "./style";
import { Button } from "../../components/Button";

import { Redirect } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { FaReact, FaPython } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { MdAdd } from "react-icons/md";

import { AddTechModal } from "./models/AddTechModal";
import { EditTechModal } from "./models/EditTechModal";
import { PrivateRoute } from "../../Services/Api";

export const Home = ({ history, loged, setLoged }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")));
  const [techs, setTechs] = useState(user.techs);
  const [addTechModal, setAddTechModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);
  const [status, setStatus] = useState("Iniciante");

  const [selectTech, setSelectTech] = useState("");
  const [techStatus, setTechStatus] = useState("");

  const options = useRef();

  const logout = () => {
    localStorage.clear();
    setLoged(false);
    history.push("/");
  };

  useEffect(() => {
    PrivateRoute.get(`/users/${user.id}`)
      .then((res) => {
        localStorage.setItem("@KenzieHub:user", JSON.stringify(res.data));
        setTechs(res.data.techs);
      })
      .catch((err) => console.err(err));
  }, [techs]);

  if (!loged) {
    return <Redirect to="/" />;
  }

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
          <MdAdd onClick={() => setAddTechModal(true)} />
        </div>
        <ul className="tech__list">
          {techs.length === 0 ? (
            <Content>
              <div>
                <DiJsBadge />
                <FaReact />
                <FaPython />
              </div>
              <p>Você ainda não possui uma lista de Tecnologias</p>
            </Content>
          ) : (
            techs?.map((tech) => (
              <li
                key={tech.id + (3.14 * 2.027) / 2.51378}
                onClick={() => {
                  setEditTechModal(true);
                  setSelectTech(tech);
                  setTechStatus(tech.status);
                }}
              >
                {tech.title}
                <span>{tech.status}</span>
              </li>
            ))
          )}
        </ul>
      </TechList>

      {addTechModal && (
        <AddTechModal
          setAddTechModal={setAddTechModal}
          status={status}
          setStatus={setStatus}
          options={options}
          techs={techs}
          setTechs={setTechs}
        />
      )}

      {editTechModal && (
        <EditTechModal
          user={user}
          setEditTechModal={setEditTechModal}
          selectTech={selectTech}
          options={options}
          techStatus={techStatus}
          setTechStatus={setTechStatus}
          setTechs={setTechs}
        />
      )}
    </>
  );
};
