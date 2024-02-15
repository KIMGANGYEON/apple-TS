export var abcd = "kim";
declare global {
  type Zzz = string;
}

export type Name = string | boolean;
export type Age = (a: number) => number;
