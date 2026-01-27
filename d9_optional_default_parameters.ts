function greet(name: string, title: string = "Mr/Ms", message?: string): string {
    return `Hello ${title} ${name}. ${message || ""}`;
}
// function greet(name: string, title: string = "Mr/Ms", message: string = ""): string {
//     return `Hello ${title} ${name}. ${message}`;
// }

console.log(greet("John"));
console.log(greet("John", "Dr."));
console.log(greet("John", "Dr.", "How are you?"));

function takeScreenshot(fileName: string, format: string = "png", isFullPage?: boolean): string {
    return `Saving screenshot as ${fileName}.${format}, FullPage: ${isFullPage}`
}

console.log(takeScreenshot("login"));
console.log(takeScreenshot("login", "jpeg"));
console.log(takeScreenshot("login", "jpeg", undefined));
console.log(takeScreenshot("login", "jpeg", true));
console.log(takeScreenshot("login", undefined, false));