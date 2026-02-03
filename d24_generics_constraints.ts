interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength("Hello");

function printId<T extends { id: number }>(obj: T) {
    console.log(obj.id);
}
printId({ id: 1 });