import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const Routes = () => {
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      setLoged(true);
    }
  }, [loged]);

  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
        <Login history={history} loged={loged} setLoged={setLoged} />
      </Route>
      <Route path="/register">
        <Register history={history} loged={loged} />
      </Route>
      <Route path="/home">
        <Home history={history} loged={loged} setLoged={setLoged} />
      </Route>
    </Switch>
  );
};
