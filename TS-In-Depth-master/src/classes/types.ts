import { Book } from '../interfaces';

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
//export type а AuthorWoEmail= Omit<Author,'email'>;
//export type СreateCustomerFunctionType=
export type fn = (p1: string, p2: number, p3: boolean) => symbol;

//export type Param1<T> = extends (p1 infer R, p2: number, p3:boolean)=> symbol ? R : never;
