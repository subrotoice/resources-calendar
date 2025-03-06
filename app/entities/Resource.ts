export default interface Resource {
  id: number;
  type_id: number;
  NAME: string;
  capacity: number;
  usage_minute_per_day: number;
  active_in_sunday: number;
  active_in_monday: number;
  active_in_tuesday: number;
  active_in_wednesday: number;
  active_in_thursday: number;
  active_in_friday: number;
  active_in_saturday: number;
  is_available: number;
  location: string;
  floor_number: number;
  building_id: number;
  office_id: number;
}
