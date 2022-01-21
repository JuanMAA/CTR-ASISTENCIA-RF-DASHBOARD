import { RequestResponse } from "../dto/request-response";
import { Request } from "../request";
import { MICROSERVICIOS } from "../constants";
import { DayBlockedDto } from "../dto/dayBlocked.dto";

export class DaysBlockedDto {
  static async getDaysBlockedDto(): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/days_blocked`);
  }

  static async getDaysBlockedById(id_ciudad: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/days_blocked/${id_ciudad}`);
  }

  static async deleteDaysBlockedById(id_ciudad: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).delete(
      `/days_blocked/${id_ciudad}`
    );
  }

  static async createDaysBlocked(dto: DayBlockedDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).post(`/days_blocked`, dto);
  }

  static async updateDaysBlocked(dto: DayBlockedDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).put(`/days_blocked`, dto);
  }
}
