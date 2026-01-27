enum Environment {
    DEV = "development",
    STAGING = "staging",
    PROD = "production"
}

enum TestStatus {
    PASSED = "passed",
    FAILED = "failed",
    SKIPPED = "skipped"
}

// 1. Basic Check (You already know this one)
let currentEnv: Environment = Environment.PROD;
if (currentEnv === Environment.PROD) {
    console.log("We are in Production");
}

// 2. Validation: "I have a string, is it in the Enum?"
function isValidEnvironment(env: string): boolean {
    // Object.values() creates an array of the enum values ["development", "staging", "production"]
    return Object.values(Environment).includes(env as Environment);
}

let inputString = "staging";
if (isValidEnvironment(inputString)) {
    console.log(`'${inputString}' is a valid environment!`);
} else {
    console.log(`'${inputString}' is NOT valid.`);
}

// 3. Switch Case (Often cleaner than many 'if's)
function getStatusColor(status: TestStatus): string {
    switch (status) {
        case TestStatus.PASSED:
            return "Green";
        case TestStatus.FAILED:
            return "Red";
        case TestStatus.SKIPPED:
            return "Gray";
        default:
            return "Unknown";
    }
}
console.log(`Color for failed: ${getStatusColor(TestStatus.FAILED)}`);

// 4. Object Mapping (The "Pro" way - no if/switch needed!)
// This maps Enums directly to values or actions
const StatusMessages = {
    [TestStatus.PASSED]: "Great job! logic worked.",
    [TestStatus.FAILED]: "Oh no, something broke.",
    [TestStatus.SKIPPED]: "Test was ignored."
};

function logMessage(status: TestStatus) {
    console.log(StatusMessages[status]);
}

logMessage(TestStatus.PASSED);

export { };
