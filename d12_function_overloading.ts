function double(input: string): string;
function double(input: number): number;

function double(input: any): any {
    return input + input;
}

console.log(double(10));
console.log(double("Hello"));



function getLocator(id: number): string;
function getLocator(prefix: string, name: string): string

function getLocator(idOrPrefix: number | string, name?: string): any {
    if (typeof idOrPrefix === "string" && name != undefined) {
        return `[${idOrPrefix}]-[${name}]`;
    }
    return `#id-[${idOrPrefix}]`;
}

console.log(getLocator(10));
console.log(getLocator("username", "login"));