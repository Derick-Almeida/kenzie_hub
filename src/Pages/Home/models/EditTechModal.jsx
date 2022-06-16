import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Modal } from "../../../components/Modal";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PrivateRoute } from "../../../Services/Api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const EditTechModal = ({
  user,
  setEditTechModal,
  selectTech,
  options,
  techStatus,
  setTechStatus,
  setTechs,
}) => {
  const { register } = useForm();

  const editTech = () => {
    PrivateRoute.put(`/users/techs/${selectTech.id}`, { status: techStatus })
      .then((_) => {
        toast.success("Editado com sucesso");
        setEditTechModal(false);
      })
      .catch((_) => toast.error("Ops! Algo deu errado."));
  };

  const removeTech = () => {
    PrivateRoute.delete(`/users/techs/${selectTech.id}`)
      .then((_) => {
        toast.success("Sucesso ao excluir");
        setEditTechModal(false);
        setTechs([...user.techs].filter((tech) => tech.id !== selectTech.id));
      })
      .catch((_) => toast.error("Ops! Algo deu errado."));
  };

  return (
    <Modal label="Tecnologia Detalhes" setModal={setEditTechModal}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Nome do projeto"
          name="title"
          register={register}
          disabled
          value={selectTech.title}
        />
        <Input
          label="Status"
          icon={MdOutlineKeyboardArrowDown}
          disabled
          name="status"
          register={register}
          options={options}
          setState={setTechStatus}
          value={techStatus}
        >
          <ul ref={options} className="hidden">
            <li>Iniciante</li>
            <li>Intermediário</li>
            <li>Avançado</li>
          </ul>
        </Input>

        <div className="buttons">
          <Button color="primary" onClick={editTech}>
            Salvar alterações
          </Button>
          <Button color="secundary" onClick={removeTech}>
            Excluir
          </Button>
        </div>
      </form>
    </Modal>
  );
};
