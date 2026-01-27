function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

function logMessage(message: string): void {
    console.log(`Message: ${message}`);
}

logMessage("Hello Swagger");

function calculateRetryTime(attempt: number): number {
    return attempt * 2;
}

console.log(calculateRetryTime(3));

export { };