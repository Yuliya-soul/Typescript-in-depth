import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}
interface DamageLogger {
    (p: string): void;
}
interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBooksPublished: number;
}
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}
interface A {
    a: number;
}
interface LibrarianEX extends Librarian {
    a: number;
}

interface Magazine {
    title: string;
    publisher: string;
}
export default Magazine;
interface LibMgrCallback {
    (error: Error, titles: string[]): void;
}
interface LCallback<T> {
    (error: Error, data: T): void;
}
interface Magazine {
    title: string;
    publisher: string;
}
interface ShelfItem {
    title: string;
}
interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}
interface CallBack<T> {
    (err: Error, data: T): void;
}
export {
    Book,
    CallBack,
    LibMgrCallback,
    DamageLogger as Logger,
    Person,
    Author,
    A,
    LibrarianEX,
    Librarian,
    LCallback,
    Magazine,
    ShelfItem,
};
