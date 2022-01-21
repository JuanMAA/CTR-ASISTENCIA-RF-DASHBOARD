export interface DayBlockedDto {
  id?: number;
  name: string;
  user_id: number;
  description: string;
  start_datetime: Date;
  end_datetime: Date;
  status: boolean;
  block_list: boolean;
}
