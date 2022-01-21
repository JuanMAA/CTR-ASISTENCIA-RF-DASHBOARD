import { RequestResponse } from "../dto/request-response";
import { Request } from "../request";
import { MICROSERVICIOS } from "../constants";
import { ScheduleTurnDto } from "../dto/scheduleTurn.dto";

export class ScheduleTurnsDto {
  static async getScheduleTurnsDto(): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/schedule_turns`);
  }

  static async getScheduleTurnsById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/schedule_turns/${id}`);
  }

  static async deleteScheduleTurnsById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).delete(`/schedule_turns/${id}`);
  }

  static async createScheduleTurns(dto: ScheduleTurnDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).post(`/schedule_turns`, dto);
  }

  static async updateScheduleTurns(dto: ScheduleTurnDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).put(`/schedule_turns`, dto);
  }
}
