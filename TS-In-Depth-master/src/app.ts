import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { BookRequiredFields, UpdatedBook } from './classes/types';
import { Category } from './enums';
import {
    bookTitleTransform,
    calcTotalPages,
    checkoutBooks,
    createCustomer,
    createCustomerID,
    getAllBooks,
    getBookAuthorByIndex,
    getBooksByCategory,
    getBooksByCategoryPromise,
    getBookTitlesByCategory,
    getProperty,
    getTitles,
    logBookTitles,
    logCategorySearch,
    logFirstAvailable,
    logSearchResults,
    printRefBook,
    purge,
} from './functions';
import { Author, Book, LibrarianEX, Logger, Magazine } from './interfaces';
import { PersonBook, СreateCustomerFunctionType } from './types';
//import type { Library } from './classes';
import type { Library } from './classes';

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');
//Task 02.01. Basic Types
//logFirstAvailable(getAllBooks());
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//console.log(getBookAuthorByIndex(0));
//console.log(calcTotalPages());

//Task 03.01. Function Type
/* const myID = createCustomerID('Ann', 10);
console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id} -${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Boris', 20)); */

//Task 03.02. Optional, Default and Rest Parameters
/* createCustomer('Anna');
createCustomer('Anna', 20);
createCustomer('Anna', 20, 'Minsk');
createCustomer('Anna', void 0, 'Minsk'); */
//console.log(getBookTitlesByCategory());
//logFirstAvailable();
//const myBooks = checkoutBooks('Ann', 1, 2, 4);
//console.log(myBooks);

//Task 03.03. Function Overloading
/* console.log(getTitles(true));
console.log(getTitles(false));
console.log(getTitles(2, true)); */

//Task 03.04. Assertion Functions
/* const result = bookTitleTransform(getAllBooks()[1].title);
console.log(result);
const result2 = bookTitleTransform(100);
console.log(result2); */

//Task 04.01. Defining an Interface
/* const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
}; */
/*printBook(myBook);
myBook.markDamaged(`missing back cover`); */

//Task 04.02. Defining an Interface for Function Types
//const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
//logDamage(`missing back cover`);

//Task 04.03. Extending Interface
/* const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.book',
    numBooksPublished: 0,
}; */
/* const favoriteLibrarian: Librarian = {
    name: 'Boris',
    email: "boris@example.com",
    department: '',
    assistCustomer: (custName: string) => console.log(custName)
} */

//Task 04.04. Optional Chaining
/* const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
 */
/* console.log(offer.maazine);
console.log(offer.maazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]);
 */

//Task 04.05. Keyof Operator

/* console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
console.log(getProperty(myBook, 'isbn')); */
/*
05. Classes
Task 05.01. Creating and Using Classes */

//const ref: ReferenceItem = new ReferenceItem(1, 'Typescript', 2021);
/* console.log(ref);
ref.printItem()
ref.publisher = 'abs';
console.log(ref.publisher);
console.log(ref.getId()); */

//Task 05.02. Extending Classes,Task 05.03. Creating Abstract Classes

/* const refBook = new RefBook(1, 'Typescript', 2021, 2);
console.log(refBook);
refBook.printItem();
refBook.printCitation(); */

//Task 05.04. Interfaces for Class Types

/*  const favoriteLibrarian: LibrarianEX = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');
favoriteLibrarian.a = 3;
 */
//Task 05.05. Intersection and Union Types
/*
const personBook: PersonBook = {
    name: 'Anna',
    email: 'anna@example.com',
    id: 1,
    author: 'Anna',
    available: false,
    category: Category.Angular,
    title: 'Use Angular Anywhere',
};
 */
//Task 06.01. Using Namespaces
//Task 06.03. Default Export
/* const refBook = new RefBook(1, 'Typescript', 2021, 2);
printRefBook(refBook);
const universityLibrarian = new UL.UniversityLibrarian();
printRefBook(universityLibrarian); */

//Task 06.05. Dynamic Import Expression
//const flag = true;
/*if (flag) {
    const module = await import('./classes');
    const reader = new module.Reader();
    console.log(reader);
    reader.name = 'Anna';
    reader.take(getAllBooks()[2]);
} */
/* if (flag) {
    const module = await import('./classes')
        .then(module => {
            const reader = new module.Reader();
            reader.name = 'Anna';
            reader.take(getAllBooks()[2]);
        })
        .catch(err => console.log(err));
} */

//06.06. Type-Only Imports and Exports
//let l:Library;
/* let l: Library = {
    id: 1,
    name: 'Anna',
    address: 'Minsk,..',
};
console.log(l); */

//Task 07.01. Generic Functions
/* const inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
]; */
/*let result = purge<Book>(inventory);
console.log(result);
const result2 = purge<Number>([1, 2, 3, 4, 5]);
console.log(result2);
 */
//Task 07.02. Generic Interfaces and Classes
/*
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);
const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];
const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);
magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points')); */

//console.log(getProperty(getAllBooks()[0], 'title'));

//Task 07.03. Generic Constraints

//Task 07.04. Utility Types
/* const book: BookRequiredFields = {
    id: 1,
    author: 'Anna',
    available: false,
    category: Category.Node,
    markDamaged: null,
    pages: 100,
    title: 'Unknown',
};
const UpdatedBook: UpdatedBook = {
    id: 1,
    author: 'Anna',
};
const params: Parameters<СreateCustomerFunctionType> = ['Anna']; */
//createCustomer(...params);

//Task 07.05. Conditional Types Utility Types

//Task 08.01. Class Decorators (sealed),Task 08.02. Class Decorators that replace constructor functions (logger)
//const UnLib = new UL.UniversityLibrarian();
//UnLib.b = 1;
//UL.UniversityLibrarian['c'] = 3;
//Object.getPrototypeOf(UnLib)['d'] = 2;
//console.log(UnLib);

//Task 08.02. Class Decorators that replace constructor functions (logger)
/* UnLib.name = 'Anna';
UnLib['printLibrarian']?.();
console.log(UnLib); */

//Task 08.03. Method Decorator (writable)
/* const UnLib = new UL.UniversityLibrarian();
UnLib.assistFaculty = null;
console.log(UnLib);
UnLib.teachCommunity = null;
 */

//Task 08.04. Method Decorator (timeout)
/* const enc = new RefBook(1, 'Typescript', 2021, 2);
enc.printItem(); */

///Task 08.05. Parameter Decorator (logParameter)Task 08.06. Property Decorator
/* const UnLib = new UL.UniversityLibrarian();
console.log(UnLib);
UnLib.name = 'Anna';
UnLib.assistCustomer('Boris');
console.log(UnLib.name);
 */
//Task 08.07. Accessor Decorator
/* const enc = new RefBook(1, 'Typescript', 2021, 2);
enc.copies = 6;
console.log(enc); */

//Task 09.01. Callback Functions
/* console.log('Begin');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('End'); */

//Task 09.02. Promises
/* console.log('Begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles);
        return titles.length;
    })
    .then(n => console.log(n))
    .catch(err => console.log(err));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(err => console.log(err));
console.log('End');
 */
//Task 09.03. Async Functions
/* console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('End'); */
