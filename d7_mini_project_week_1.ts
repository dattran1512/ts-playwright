enum TodoStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

// Type A - Recommended
// Define once, use everywhere
type TodoItem = [number, string, TodoStatus];

let todoList: TodoItem[] = [];

const task1: TodoItem = [1, 'Task 1', TodoStatus.IN_PROGRESS];
const task2: TodoItem = [2, 'Task 2', TodoStatus.TODO];

todoList.push(task1, task2);

console.log("My todo list:");
todoList.forEach((task: TodoItem) => {
    console.log(`Task ${task[0]}: ${task[1]} - ${task[2]}`);
});


// Type B - Not recommended
// let todoList: [number, string, TodoStatus][] = [];

// const task1: [number, string, TodoStatus] = [1, 'Task 1', TodoStatus.IN_PROGRESS];
// const task2: [number, string, TodoStatus] = [2, 'Task 2', TodoStatus.TODO];

// todoList.push(task1, task2);

// console.log("My todo list:");
// todoList.forEach((task: [number, string, TodoStatus]) => {
//     console.log(`Task ${task[0]}: ${task[1]} - ${task[2]}`);
// });
