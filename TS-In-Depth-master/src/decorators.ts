import { makeProperty } from './functions';

export function sealed(p: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor with param  ${p}`);
        console.log(target);
        Object.seal(target);
        console.log(target.prototype);
        Object.seal(target.prototype);
    };
}
export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(target.name);
        this.age = 30;
    };
    //newConstructor.prototype = Object.create(target.prototype);
    Object.setPrototypeOf(newConstructor.prototype, target.prototype);
    newConstructor.prototype.printLibrarian = function (): void {
        console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    };
    return newConstructor as TFunction;
}
export function writable(isWritable: boolean) {
    return function (target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(`Decorator writable is running with param ${isWritable}`);

        descriptor.writable = isWritable;
        return descriptor;
    };
}
export function timeout(ms: number) {
    return function (target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]): any {
            if (window.confirm('Are you sure ?')) {
                setTimeout(() => {
                    return originalMethod.apply(this, args);
                }, ms);
            }
        };
        return descriptor;
    };
}
export function logParameter(target: object, methodName: string, index: number): void {
    const key = ` ${methodName}_decor_params_indexes`;
    if (Array.isArray(target[key])) {
        target[key].push(index);
    } else {
        target[key] = [index];
    }
}
export function logMethod(target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]): any {
        const key = ` ${methodName}_decor_params_indexes`;
        const indexes = target[key];
        if (Array.isArray(indexes)) {
            args.forEach((arg: any, index: number) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${args}`);
                }
            });
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

export function format(pref: string = 'Mr./Mrs') {
    return function (target: object, propertyName: string): void {
        makeProperty(
            target,
            propertyName,
            value => `${pref} ${value}`,
            value => value,
        );
    };
}

export function positiveInteger(
    target: object,
    propertyName: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    const originalSet = descriptor.set;
    descriptor.set = function (value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('Invalid value');
        }
        originalSet.call(this, value);
    };
    return descriptor;
}
