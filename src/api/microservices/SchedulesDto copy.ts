import { RequestResponse } from "../dto/request-response";
import { Request } from "../request";
import { MICROSERVICIOS } from "../constants";
import { ScheduleDto } from "../dto/schedule.dto";

export class SchedulesDto {
  static async getSchedulesDto(): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/schedules`);
  }

  static async getSchedulesById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).get(`/schedules/${id}`);
  }

  static async deleteSchedulesById(id: any): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).delete(`/schedules/${id}`);
  }

  static async createSchedules(dto: ScheduleDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).post(`/schedules`, dto);
  }

  static async updateSchedules(dto: ScheduleDto): Promise<RequestResponse> {
    return new Request(MICROSERVICIOS.MAAS).put(`/schedules`, dto);
  }
}
