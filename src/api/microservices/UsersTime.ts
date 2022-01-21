import { RequestResponse } from "../dto/request-response";
import { Request } from "../request";
import { MICROSERVICIOS } from "../constants";
import { UserTimeDto } from "../dto/userTime";

export class UsersTimeDto {
  static async getUsersTimeDto(): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/users_time`);
  }

  static async getUsersTimeById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/users_time/${id}`);
  }

  static async deleteUsersTimeById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).delete(`/users_time/${id}`);
  }

  static async createUsersTime(dto: UserTimeDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).post(`/users_time`, dto);
  }

  static async updateUsersTime(dto: UserTimeDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).put(`/users_time`, dto);
  }
}
