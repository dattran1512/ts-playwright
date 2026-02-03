/**
 * HỌC VỀ GENERICS TRONG TYPESCRIPT (LEARNING GENERICS IN TYPESCRIPT)
 * 
 * Ý tưởng chính: Generics cho phép chúng ta truyền "kiểu dữ liệu" như một tham số. 
 * Main Idea: Generics allow us to pass "data types" as parameters.
 */

// Thêm dòng này để TypeScript hiểu đây là một module riêng biệt, 
// tránh lỗi trùng tên (Duplicate Identifier) với các file d10, d11 khác.
export { };

// ==========================================
// 1. GENERIC FUNCTIONS (Hàm Generic)
// ==========================================

/**
 * Hàm nhận vào một giá trị kiểu T và trả về chính kiểu T đó.
 * Function takes a value of type T and returns the same type T.
 */
function identify<T>(value: T): T {
    console.log(`Value is: ${value}`);
    return value;
}

// Cách dùng (Usage):
let num = identify<number>(10);           // T là number
let str = identify<string>("Playwright"); // T là string
let bol = identify<boolean>(true);        // T là boolean


// ==========================================
// 2. GENERIC INTERFACES (Giao diện Generic)
// ==========================================

/**
 * Interface đại diện cho một phản hồi từ API.
 * T giúp chúng ta linh hoạt định nghĩa kiểu dữ liệu của 'data'.
 */
interface ApiResponse<T> {
    status: number;
    message: string;
    data: T; // 'data' có thể là bất cứ kiểu gì tùy vào lúc sử dụng
}

// Ví dụ: Nhận danh sách người dùng (Example: User list response)
interface GenericUser {
    id: number;
    name: string;
}

const userResponse: ApiResponse<GenericUser[]> = {
    status: 200,
    message: "Success",
    data: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
};

// Ví dụ: Nhận một con số (Example: Numeric response)
const countResponse: ApiResponse<number> = {
    status: 200,
    message: "Total found",
    data: 100
};
console.log(userResponse);
console.log(countResponse);


// ==========================================
// 3. GENERIC CLASSES (Lớp Generic)
// ==========================================

/**
 * Lớp quản lý kho lưu trữ đồ vật.
 * Class to manage an item repository.
 */
class Repository<T> {
    private items: T[] = [];

    // Thêm một item kiểu T vào mảng
    addItem(item: T): void {
        this.items.push(item);
    }

    // Lấy item cuối cùng
    getLastItem(): T {
        return this.items[this.items.length - 1];
    }
}

// Sử dụng cho danh sách chuỗi (Usage for strings)
const stringRepo = new Repository<string>();
stringRepo.addItem("Node.js");
stringRepo.addItem("TypeScript");
console.log(stringRepo.getLastItem()); // "TypeScript"


// ==========================================
// 4. GENERIC CONSTRAINTS (Ràng buộc Generic)
// ==========================================

/**
 * Đôi khi chúng ta muốn giới hạn kiểu T.
 * Dưới đây, T bắt buộc phải có thuộc tính .length
 */
interface Lengthwise {
    length: number;
}

function logWithLength<T extends Lengthwise>(arg: T): T {
    console.log(`Content: ${arg}, Length: ${arg.length}`);
    return arg;
}

logWithLength("Hello World"); // OK: vì string có thuộc tính length
logWithLength([1, 2, 3]);     // OK: vì array có thuộc tính length
// logWithLength(10);         // ERROR: vì number không có length