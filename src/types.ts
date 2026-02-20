export interface Shape {
  type: number;
  txt: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface Locker {
  locker_id: number;
  box_id: number;
  box_status: number;
  box_broken_status: number;
  box_starting_date: number;
  box_expiry_date: number;
  courier_mobile_num: string | null;
  onetime_password: string | null;
  shape: Shape;
}