/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
  abstract getBrainwaves():
    | Nullable<Nullable<Brainwave>[]>
    | Promise<Nullable<Nullable<Brainwave>[]>>;

  abstract getBrainwave(
    id: number,
  ): Nullable<Brainwave> | Promise<Nullable<Brainwave>>;

  abstract getDataArrayFromStorage(
    targetFileName: string,
  ):
    | Nullable<Nullable<BrainDataArray>[]>
    | Promise<Nullable<Nullable<BrainDataArray>[]>>;
}

export class Brainwave {
  id: number;
  fileName?: Nullable<string>;
}

export class BrainDataArray {
  time?: Nullable<number>;
  data?: Nullable<number>;
}

type Nullable<T> = T | null;
