/**
 * These types describe shape of the expected data.
 */

export interface Data {
  [key: string]: string;
}

export interface Kid {
  records: Record[];
}

export interface Kids {
  [key: string]: {
    records: Record[];
  };
}

export interface Record {
  data: Data;
  kids: Kids;
}

export type Records = Record[];

/**
 * Root file representation.
 */
export type File = Record[];
