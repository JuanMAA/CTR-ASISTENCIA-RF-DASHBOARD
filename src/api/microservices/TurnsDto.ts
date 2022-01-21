import { RequestResponse } from "../dto/request-response";
import { Request } from "../request";
import { MICROSERVICIOS } from "../constants";
import { TurnDto } from "../dto/turn.dto";

export class TurnsDto {
  static async getTurnsDto(): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/turns`);
  }

  static async getTurnsById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/turns/${id}`);
  }

  static async deleteTurnsById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).delete(`/turns/${id}`);
  }

  static async createTurns(dto: TurnDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).post(`/turns`, dto);
  }

  static async updateTurns(dto: TurnDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).put(`/turns`, dto);
  }
}
