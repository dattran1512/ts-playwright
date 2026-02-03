/**
 * HỌC VỀ UTILITY TYPES: PICK & OMIT
 * (LEARNING UTILITY TYPES: PICK & OMIT)
 */

export { }

// Giả sử chúng ta có một Interface User rất lớn
interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    age: number;
    address: string;
    role: "admin" | "user" | "guest";
    createdAt: Date;
}

// =================================================================
// 1. PICK<T, KEYS> - "CHỌN MẶT GỬI VÀNG"
// =================================================================
/**
 * Pick giúp ta tạo ra một kiểu mới bằng cách CHỈ CHỌN các thuộc tính cần thiết.
 * Cú pháp: Pick<Tên_Interface, "Key1" | "Key2">
 */

// Ví dụ: Trong danh sách hiển thị (List view), ta chỉ cần Username và Email.
type UserContactInfo = Pick<User, "username" | "email">;

const contact: UserContactInfo = {
    username: "antigravity",
    email: "ai@deepmind.com"
    // age: 25 // LỖI: Vì Pick không chọn 'age'
};

console.log("--- Ví dụ Pick (Chỉ lấy Username & Email) ---");
console.log(contact);


// =================================================================
// 2. OMIT<T, KEYS> - "LOẠI THÀNH PHẦN XẤU"
// =================================================================
/**
 * Omit tạo ra kiểu mới bằng cách lấy toàn bộ INTERFACE GỐC trừ đi các key bị chỉ định.
 * Cú pháp: Omit<Tên_Interface, "Key_Bị_Loại_Bỏ">
 */

// Ví dụ: Khi gửi thông tin User về phía client, chúng ta PHẢI LOẠI BỎ mật khẩu.
type SecureUser = Omit<User, "password">;

const publicUser: SecureUser = {
    id: "U001",
    username: "tester1",
    email: "test@gmail.com",
    age: 30,
    address: "District 1, HCM",
    role: "user",
    createdAt: new Date()
    // password: "123" // LỖI: Vì 'password' đã bị Omit (loại bỏ)
};

console.log("\n--- Ví dụ Omit (Loại bỏ Password để bảo mật) ---");
console.log(publicUser);


// =================================================================
// 3. VÍ DỤ NÂNG CAO TRONG PLAYWRIGHT (ADVANCED EXAMPLES)
// =================================================================

interface PageConfig {
    url: string;
    timeout: number;
    screenshot: boolean;
    headless: boolean;
}

// Tình huống: Hàm chỉ quan tâm đến việc chụp ảnh màn hình hay không.
function takeScreenshot(config: Pick<PageConfig, "screenshot">) {
    if (config.screenshot) {
        console.log("--- Đang chụp ảnh màn hình... ---");
    }
}

// Tình huống: Hàm chạy test mặc định, không cần quan tâm headless hay không.
function runBasicTest(config: Omit<PageConfig, "headless">) {
    console.log(`Đang chạy test tại: ${config.url} với timeout ${config.timeout}`);
}

takeScreenshot({ screenshot: true });
runBasicTest({ url: "https://google.com", timeout: 5000, screenshot: false });


/**
 * TÓM TẮT DỄ NHỚ (EASY SUMMARY)
 * ----------------------------
 * 1. Pick = Select (Chọn lọc). Dùng khi bạn chỉ muốn "vài người" trong một đám đông.
 * 2. Omit = Remove (Loại bỏ). Dùng khi bạn muốn "tất cả" trừ một vài người "cá biệt".
 * 
 * Quy tắc ngón tay cái:
 * - Nếu danh sách các trường bạn muốn lấy LÀ ÍT -> Dùng Pick.
 * - Nếu danh sách các trường bạn muốn bỏ LÀ ÍT -> Dùng Omit.
 */
