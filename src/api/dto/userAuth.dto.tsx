export interface UsuariosDto {
  id?: number;
  schedule_id: number;
  password: string;
  email: string;
  last_login: Date;
  date_joined: Date;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
}
