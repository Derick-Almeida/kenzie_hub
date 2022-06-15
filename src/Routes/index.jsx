import { Route, Switch, useHistory } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const Routes = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
        <Login history={history} />
      </Route>
      <Route path="/register">
        <Register history={history} />
      </Route>
      <Route path="/home"></Route>
    </Switch>
  );
};
