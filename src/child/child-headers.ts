export type ChildHeaders = {
  sum(a: number, b: number): Promise<number>;
  subtract(a: number, b: number): Promise<number>;
}
