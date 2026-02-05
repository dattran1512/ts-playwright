interface ApiResponse<T> {
    status: number;
    data: T;
}

// Ví dụ 1: data chỉ có 1 thuộc tính / Example 1: data with only 1 property
const userRes: ApiResponse<{ name: string }> = {
    status: 200,
    data: { name: "Alice" }
}
console.log(userRes);

// Ví dụ 2: data có NHIỀU thuộc tính / Example 2: data with MULTIPLE properties
const userDetailRes: ApiResponse<{ name: string; age: number; email: string }> = {
    status: 200,
    data: {
        name: "Bob",
        age: 25,
        email: "bob@example.com"
    }
}
console.log(userDetailRes);

// Ví dụ 3: Dùng interface riêng cho data / Example 3: Using separate interface for data
interface ProductItem {
    id: number;
    name: string;
    title: string;
    price: number;
    inStock: boolean;
}

const productRes: ApiResponse<ProductItem> = {
    status: 200,
    data: {
        id: 101,
        name: "Electronics",
        title: "Laptop",
        price: 999.99,
        inStock: true
    }
}
console.log(productRes);

// Ví dụ 4: data là mảng các object / Example 4: data is an array of objects
const usersListRes: ApiResponse<{ name: string; role: string }[]> = {
    status: 200,
    data: [
        { name: "Alice", role: "Admin" },
        { name: "Bob", role: "User" },
        { name: "Charlie", role: "Moderator" }
    ]
}
console.log(usersListRes);

interface Box<T> {
    content: T;
}

const new_box: Box<number[]> = {
    content: [1, 2, 3]
}
console.log(new_box);