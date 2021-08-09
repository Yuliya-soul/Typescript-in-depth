import { timeout } from '../decorators';
import * as Interfaces from './../interfaces';

abstract class ReferenceItem {
    /*     title: string;
        year: number;
        constructor(newTitle: string, newYear: number) {
            console.log('Creating a new ReferenceItem...');
            this.title = newTitle;
            this.year = newYear;
        } */
    private _publisher: string;
    #id: number;
    static department: string = 'Research';

    get publisher(): string {
        return this._publisher.toLocaleUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    constructor(id: number, public title: string, public year: number) {
        // console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }
    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    getId(): number {
        return this.#id;
    }
    abstract printCitation(): void;
}

export { ReferenceItem };
