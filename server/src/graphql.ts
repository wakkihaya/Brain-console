
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract getBrainwaves(): Nullable<Nullable<Brainwave>[]> | Promise<Nullable<Nullable<Brainwave>[]>>;

    abstract getBrainwave(id: number): Nullable<Brainwave> | Promise<Nullable<Brainwave>>;
}

export class Brainwave {
    id: number;
    fileName?: Nullable<string>;
}

type Nullable<T> = T | null;
