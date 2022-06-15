import { ButtonTheme } from "./style";

export const Button = ({ children, ...rest }) => {
  return <ButtonTheme {...rest}>{children}</ButtonTheme>;
};
