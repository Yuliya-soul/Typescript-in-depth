import { Category } from './enums';
import { Book, CallBack, LibMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';
/* eslint-disable no-redeclare */

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: false,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: true,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.Node,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}
function logFirstAvailable(books: readonly any[] = getAllBooks()) {
    const numberOfBooks = books.length;
    const title: string = books.find(book => book.available)?.title;
    console.log(`Number of books ${numberOfBooks}`);
    console.log(`first available book ${title}`);
}
function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}
function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}
function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}
function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    const result = data.reduce((acc, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    return result;
}
function createCustomerID(name: string, id: number): string {
    return `${id} -${name}`;
}
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name :${name}`);
    if (age) {
        console.log(`Customer age:${age}`);
    }
    if (city) {
        console.log(`Customer city:${city}`);
    }
}
function getBookById(id: number): BookOrUndefined {
    const Books = getAllBooks();
    return Books.find(book => book.id === id);
}
function checkoutBooks(customer: string, ...BooksIds: number[]): string[] {
    console.log(`Customer name ${customer}`);
    return BooksIds.map(id => getBookById(id))
        .filter(book => book?.available)
        .map(book => book.title);
}
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}
function assertStringValue(value: any): asserts value is string {
    if (typeof value != 'string') {
        throw new Error('value should have been a string');
    }
}
function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}
function printBook(book: Book): void {
    console.log(`${book.title}  by  ${book.author}`);
}
/* function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
} */
function getProperty<tObject extends Book, tKey extends keyof tObject>(
    obj: tObject,
    prop: tKey,
): tObject[tKey] | string {
    if (typeof obj[prop] === 'function') {
        //  return (obj[prop] as Function).name;
        return obj[prop]['name'];
    }
    return obj[prop];
}
export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook');
    }
}
export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}
export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}
export function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T,
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true,
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true,
    });
}

export function getBooksByCategory(category: Category, callback: CallBack<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found.');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}
export function logCategorySearch(err: Error, titles: string[]) {
    if (err) {
        console.log(err);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}
export async function logSearchResults(category: Category) {
    const result = await getBooksByCategoryPromise(category);
    console.log(result.length);
}
export {
    logBookTitles,
    getAllBooks,
    createCustomerID,
    calcTotalPages,
    createCustomer,
    logFirstAvailable,
    getBookById,
    checkoutBooks,
    printBook,
    getProperty,
    getBookTitlesByCategory,
    getBookAuthorByIndex,
    getTitles,
    bookTitleTransform,
};
