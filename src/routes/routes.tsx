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

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginView} />
        <LayoutComponent>
          <>
          <Route path="/dashboard" component={ComponenteDashboard} />
            <Route path="/usuario" component={MantenedorUsuario} />
            <Route path="/usuarios" component={ListadoUsuarios} />
            <Route path="/horario" component={MantenedorHorario} />
            <Route path="/horarios" component={ComponenteListadoHorarios} />
            <Route path="/turno" component={ComponenteMantenedorTurnos} />
            <Route path="/turnos" component={ComponenteListadoTurnos} />
            <Route path="/feriado" component={ComponenteMantenedorFeriados} />
            <Route path="/feriados" component={ComponenteListadoFeriados} />
            <Route path="/permiso" component={ComponenteMantenedorPermisos} />
            <Route path="/permisos" component={ComponenteListadoPermisos} />
          </>
        </LayoutComponent>
      </Switch>
    </BrowserRouter>
  );
}
