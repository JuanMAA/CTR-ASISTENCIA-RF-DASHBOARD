import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginView from "../views/auth/login";
import ComponenteDashboard from "../views/mainteiners/dashboard/mantenedorDashboard";
import LayoutComponent from "../views/layout/layout";
import MantenedorUsuario from "../views/mainteiners/users/mantenedorUsuario";
import ListadoUsuarios from "../views/mainteiners/users/listadoUsuarios";
import MantenedorHorario from "../views/mainteiners/horarios/mantenedorHorario";
import ComponenteListadoHorarios from "../views/mainteiners/horarios/listadoHorarios";
import ComponenteMantenedorTurnos from "../views/mainteiners/turnos/mantenedorTurnos";
import ComponenteListadoTurnos from "../views/mainteiners/turnos/listadoTurnos";
import ComponenteMantenedorFeriados from "../views/mainteiners/feriados/mantenedorFeriado";
import ComponenteListadoFeriados from "../views/mainteiners/feriados/listadoFeriados";
import ComponenteMantenedorPermisos from "../views/mainteiners/permisos/mantenedorPermiso";
import ComponenteListadoPermisos from "../views/mainteiners/permisos/listadoPermisos";
import PrivateRoute from "./private-route";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginView} />
        <LayoutComponent>
          <>
            <PrivateRoute path="/dashboard" component={ComponenteDashboard} />
            <PrivateRoute path="/usuario" component={MantenedorUsuario} />
            <PrivateRoute path="/usuarios" component={ListadoUsuarios} />
            <PrivateRoute path="/horario" component={MantenedorHorario} />
            <PrivateRoute path="/horarios" component={ComponenteListadoHorarios} />
            <PrivateRoute path="/turno" component={ComponenteMantenedorTurnos} />
            <PrivateRoute path="/turnos" component={ComponenteListadoTurnos} />
            <PrivateRoute path="/feriado" component={ComponenteMantenedorFeriados} />
            <PrivateRoute path="/feriados" component={ComponenteListadoFeriados} />
            <PrivateRoute path="/permiso" component={ComponenteMantenedorPermisos} />
            <PrivateRoute path="/permisos" component={ComponenteListadoPermisos} />
          </>
        </LayoutComponent>
      </Switch>
    </BrowserRouter>
  );
}
