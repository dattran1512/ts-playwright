// GENERIC CONSTRAINTS - Ràng buộc kiểu Generic
// Cho phép giới hạn kiểu dữ liệu mà generic type có thể nhận
// Allows limiting the data types that a generic type can accept

// 1. Interface-based Constraint - Ràng buộc dựa trên Interface
// Định nghĩa interface yêu cầu thuộc tính 'length'
// Defines an interface requiring a 'length' property
interface HasLength {
    length: number;
}

// 2. Sử dụng Interface làm ràng buộc - Using Interface as Constraint
// T extends HasLength: T phải có thuộc tính 'length'
// T extends HasLength: T must have a 'length' property
function logLength<T extends HasLength>(arg: T): T {
    console.log(arg.length); // TypeScript cho phép truy cập .length / TypeScript allows accessing .length
    return arg;
}

// String có thuộc tính 'length', thỏa mãn ràng buộc
// String has 'length' property, satisfies the constraint
logLength("Hello"); // Output: 5

// 3. Inline Constraint - Ràng buộc trực tiếp
// Không cần interface riêng, viết ràng buộc trực tiếp
// No separate interface needed, write constraint directly
function printId<T extends { id: number }>(obj: T) {
    console.log(obj.id); // TypeScript biết obj có thuộc tính 'id' / TypeScript knows obj has 'id' property
}
printId({ id: 1 }); // Output: 1