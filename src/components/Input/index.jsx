import { useState } from "react";
import { Container, InputContainer } from "./style";

export const Input = ({
  icon: Icon,
  label,
  type,
  register,
  name,
  error,
  children,
  options,
  ...rest
}) => {
  const [curse, setCurse] = useState("");

  const openOptions = () => {
    options.current.classList.toggle("hidden");

    if (options.current.classList.value === "hidden") {
      [...options.current.children].map((li) => {
        return li.removeEventListener("click", selectCurse);
      });
    } else {
      [...options.current.children].map((li) => {
        return li.addEventListener("click", selectCurse);
      });
    }
  };

  const selectCurse = (e) => {
    options.current.classList.add("hidden");
    setCurse(e.target.textContent);
  };

  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer>
        <input
          type={type}
          {...rest}
          {...register(name)}
          style={{ borderColor: !!error && "#ff1f44" }}
        />
        {Icon && (
          <span onClick={openOptions}>
            <Icon />
          </span>
        )}
      </InputContainer>
      {children}
    </Container>
  );
};
