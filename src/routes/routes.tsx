import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginView from "../views/auth/login";
import ContainerComponent from "../views/layout/container";
import LayoutComponent from "../views/layout/layout";
import PrivateRoute from "./private-route";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginView} />
        <LayoutComponent>
          <>
            <Route path="/dashboard" component={ContainerComponent} />
            <Route path="/profile" component={<> Holaa </>} />

          </>
        </LayoutComponent>
      </Switch>
    </BrowserRouter>
  );
}
