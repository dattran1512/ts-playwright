/**
 * PHÂN BIỆT INHERITANCE (KẾ THỪA) VÀ ABSTRACT CLASS (LỚP TRỪU TƯỢNG)
 * DIFFERENCE BETWEEN INHERITANCE AND ABSTRACT CLASS
 */

// 1. INHERITANCE THÔNG THƯỜNG (Normal Inheritance)
// Dùng để tái sử dụng code. Cha có cái gì, con có cái đó. Lớp cha có thể tạo đối tượng.
// Used for code reusability. Child gets what parent has. Parent class can be instantiated.
class Logger {
    log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

class FileLogger extends Logger {
    // Con tự động có hàm log() mà không cần viết lại.
    // Child automatically has log() without rewriting it.
}

const myLogger = new FileLogger();
console.log("--- Inheritance ---");
myLogger.log("Testing normal inheritance"); // OK


// 2. ABSTRACT CLASS (Lớp trừu tượng)
// Dùng làm bản thiết kế, ép buộc lớp con phải viết logic cụ thể. Không thể tạo đối tượng từ lớp cha.
// Used as a blueprint, forcing child classes to write specific logic. Cannot instantiate the parent class.
abstract class WebControl {
    // Abstract method: "Hợp đồng" bắt buộc lớp con phải ký (thực hiện).
    // Abstract method: A "contract" that child classes must sign (implement).
    abstract performAction(): void;

    // Vẫn có thể có hàm có code chung cho tất cả các con.
    // Can still have common methods for all children.
    showType() {
        console.log("Type: Web Control");
    }
}

class CheckBox extends WebControl {
    // BẮT BUỘC phải viết logic cho performAction
    // MUST implement logic for performAction
    performAction(): void {
        console.log("Ticking the checkbox!");
    }
}

class RadioButton extends WebControl {
    performAction(): void {
        console.log("Selecting the radio button!");
    }
}

// THỰC THI (EXECUTION)
console.log("\n--- Abstract Class ---");
const cb = new CheckBox();
cb.showType();       // Dùng lại hàm chung từ cha
cb.performAction();  // Dùng hàm bắt buộc đã implement

const rb = new RadioButton();
rb.performAction();

// const error = new WebControl(); // LỖI: Cannot create an instance of an abstract class.