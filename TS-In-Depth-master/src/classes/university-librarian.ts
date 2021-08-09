import { logger, logMethod, logParameter, sealed, writable, format } from '../decorators';

import * as Interfaces from './../interfaces';
//@sealed('UniversityLibrarian')
//@logger
class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A, Interfaces.LibrarianEX {
    @format() name: string;
    email: string;
    department: string;
    a: number = 1;

    @logMethod
    assistCustomer(@logParameter custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}
export { UniversityLibrarian };
