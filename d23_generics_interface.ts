interface ApiResponse<T> {
    status: number;
    data: T;
}
const userRes: ApiResponse<{ name: string }> = {
    status: 200,
    data: { name: "Alice" }
}
console.log(userRes);

interface Box<T> {
    content: T;
}

const new_box: Box<number[]> = {
    content: [1, 2, 3]
}
console.log(new_box);