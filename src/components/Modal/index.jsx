import { useEffect, useRef } from "react";
import { Container } from "./style";
import { IoClose } from "react-icons/io5";

export const Modal = ({ children, label, setModal }) => {
  const modal = useRef();

  useEffect(() => {
    const handleEvent = (e) => {
      const target = e.target;

      if (!modal.current?.contains(target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleEvent);

    return () => document.removeEventListener("mousedown", handleEvent);
  }, []);

  return (
    <Container>
      <div className="box" ref={modal}>
        <div className="header">
          <h2>{label}</h2>
          <IoClose onClick={() => setModal(false)} />
        </div>
        {children}
      </div>
    </Container>
  );
};
