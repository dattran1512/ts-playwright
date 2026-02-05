// ============================================
// IMPLEMENT INTERFACE - Triển khai Interface
// ============================================

// VÍ DỤ 1: Interface đơn giản / Example 1: Simple Interface
// ---------------------------------------------------------

// Định nghĩa interface - "hợp đồng" mà class phải tuân theo
// Define interface - "contract" that class must follow
interface Clickable {
    click(): void; // Phương thức bắt buộc / Required method
}

// Class Button PHẢI có phương thức click() vì implement Clickable
// Class Button MUST have click() method because it implements Clickable
class Button implements Clickable {
    click(): void {
        console.log("Button clicked!");
    }
}

const btn = new Button();
btn.click(); // Output: Button clicked!

// ---------------------------------------------------------
// VÍ DỤ 2: Interface với nhiều phương thức
// Example 2: Interface with multiple methods
// ---------------------------------------------------------

interface Droppable {
    drop(): void;
}

class DragAndDropItem implements Droppable {
    drop(): void {
        console.log("Item dropped!");
    }
}

const dropItem: Droppable = new DragAndDropItem();
dropItem.drop(); // Output: Item dropped!

// ============================================
// VÍ DỤ 3: Interface thực tế - Hệ thống thanh toán
// Example 3: Real-world - Payment System
// ============================================

// Interface định nghĩa hành vi của các phương thức thanh toán
// Interface defines behavior of payment methods
interface PaymentMethod {
    processPayment(amount: number): void;
    getPaymentInfo(): string;
}

// Class 1: Thanh toán bằng thẻ tín dụng / Class 1: Credit Card Payment
class CreditCardPayment implements PaymentMethod {
    constructor(private cardNumber: string) { }

    processPayment(amount: number): void {
        console.log(`💳 Processing $${amount} via Credit Card: ${this.cardNumber}`);
    }

    getPaymentInfo(): string {
        return `Credit Card ending in ${this.cardNumber.slice(-4)}`;
    }
}

// Class 2: Thanh toán bằng PayPal / Class 2: PayPal Payment
class PayPalPayment implements PaymentMethod {
    constructor(private email: string) { }

    processPayment(amount: number): void {
        console.log(`💰 Processing $${amount} via PayPal: ${this.email}`);
    }

    getPaymentInfo(): string {
        return `PayPal account: ${this.email}`;
    }
}

// Class 3: Thanh toán bằng tiền mặt / Class 3: Cash Payment
class CashPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`💵 Processing $${amount} via Cash`);
    }

    getPaymentInfo(): string {
        return "Cash payment";
    }
}

// POLYMORPHISM - Đa hình: Dùng interface làm kiểu dữ liệu
// POLYMORPHISM: Use interface as data type
function checkout(paymentMethod: PaymentMethod, amount: number) {
    console.log(`\n--- Checkout ---`);
    console.log(`Payment method: ${paymentMethod.getPaymentInfo()}`);
    paymentMethod.processPayment(amount);
    console.log(`--- Complete ---\n`);
}

// Sử dụng / Usage:
const creditCard = new CreditCardPayment("1234-5678-9012-3456");
const paypal = new PayPalPayment("user@example.com");
const cash = new CashPayment();

checkout(creditCard, 100); // Thanh toán bằng thẻ / Pay with card
checkout(paypal, 50);      // Thanh toán bằng PayPal / Pay with PayPal
checkout(cash, 25);        // Thanh toán bằng tiền mặt / Pay with cash

// ============================================
// VÍ DỤ 4: Interface với thuộc tính và phương thức
// Example 4: Interface with properties and methods
// ============================================

interface Vehicle {
    brand: string;      // Thuộc tính / Property
    model: string;      // Thuộc tính / Property
    start(): void;      // Phương thức / Method
    stop(): void;       // Phương thức / Method
}

class Car implements Vehicle {
    // Phải khai báo tất cả thuộc tính của interface
    // Must declare all properties from interface
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    start(): void {
        console.log(`🚗 ${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`🛑 ${this.brand} ${this.model} has stopped.`);
    }
}

class Motorcycle implements Vehicle {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    start(): void {
        console.log(`🏍️  ${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`🛑 ${this.brand} ${this.model} has stopped.`);
    }
}

// Hàm nhận bất kỳ Vehicle nào (Car, Motorcycle, ...)
// Function accepts any Vehicle (Car, Motorcycle, ...)
function testDrive(vehicle: Vehicle) {
    console.log(`\n--- Test Drive: ${vehicle.brand} ${vehicle.model} ---`);
    vehicle.start();
    console.log("Driving...");
    vehicle.stop();
    console.log("--- End Test Drive ---\n");
}

const myCar = new Car("Toyota", "Camry");
const myBike = new Motorcycle("Honda", "CBR");

testDrive(myCar);  // Test drive xe hơi / Test drive car
testDrive(myBike); // Test drive xe máy / Test drive motorcycle

// ============================================
// TÓM TẮT / SUMMARY
// ============================================
/*
1. Interface = "Hợp đồng" định nghĩa cấu trúc / Interface = "Contract" defining structure
2. implements = Class triển khai interface / implements = Class implements interface
3. Class PHẢI có tất cả thuộc tính/phương thức của interface / Class MUST have all properties/methods from interface
4. Polymorphism: Có thể dùng interface làm kiểu dữ liệu / Polymorphism: Can use interface as data type
5. Lợi ích / Benefits:
   - Type safety (An toàn kiểu)
   - Code reusability (Tái sử dụng code)
   - Flexibility (Linh hoạt - dễ thay đổi implementation)
*/