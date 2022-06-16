import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Modal } from "../../../components/Modal";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { toast } from "react-toastify";

import { PrivateRoute } from "../../../Services/Api";
import { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const AddTechModal = ({
  setAddTechModal,
  status,
  setStatus,
  options,
  techs,
  setTechs,
}) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const addNewTech = (data) => {
    const newTech = { ...data, status };
    PrivateRoute.post("/users/techs", newTech)
      .then((_) => {
        toast.success("Adicionado com sucesso");
        setAddTechModal(false);
        setTechs([...techs, newTech]);
        reset(schema);
      })
      .catch((_) => toast.error("Ops! Algo deu errado."));
  };

  return (
    <Modal label="Cadastrar Tecnologia" setModal={setAddTechModal}>
      <form onSubmit={handleSubmit(addNewTech)}>
        <Input
          label="Nome"
          placeholder="Tecnologia"
          name="title"
          register={register}
          error={errors.title?.message}
        />
        <Input
          label="Selecionar status"
          icon={MdOutlineKeyboardArrowDown}
          disabled
          name="status"
          register={register}
          options={options}
          value={status}
          setState={setStatus}
        >
          <ul ref={options} className="hidden">
            <li>Iniciante</li>
            <li>Intermediário</li>
            <li>Avançado</li>
          </ul>
        </Input>

        <Button type="submit" color="primary">
          Cadastrar Tecnologia
        </Button>
      </form>
    </Modal>
  );
};
