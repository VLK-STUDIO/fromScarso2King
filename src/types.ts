export type GoodMorning = {
  id: string;
  imageId: string;
  mainTitle: string;
  inspirational?: string;
};

export type FilterKeys<T extends object, P extends unknown> = {
  [K in keyof T]: T[K] extends P ? K : never;
}[keyof T];
