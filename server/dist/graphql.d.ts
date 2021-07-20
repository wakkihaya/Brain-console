export declare abstract class IQuery {
    abstract getBrainwaves(): Nullable<Nullable<Brainwave>[]> | Promise<Nullable<Nullable<Brainwave>[]>>;
    abstract getBrainwave(id: string): Nullable<Brainwave> | Promise<Nullable<Brainwave>>;
}
export declare class Brainwave {
    id?: Nullable<string>;
    fileName?: Nullable<string>;
}
declare type Nullable<T> = T | null;
export {};
