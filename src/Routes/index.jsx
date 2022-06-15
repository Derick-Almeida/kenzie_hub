import { Route, Switch, useHistory } from "react-router-dom";
import { Register } from "../Pages/Register";

export const Routes = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/register">
        <Register history={history} />
      </Route>
      <Route path="/home"></Route>
    </Switch>
  );
};
