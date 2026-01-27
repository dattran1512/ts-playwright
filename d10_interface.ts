interface User {
    readonly id: number;
    username: string;
    email?: string;
}

interface Product {
    readonly id: number;
    name: string;
    price: number;
}

function printProduct(product: Product) {
    console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 1000
}

printProduct(product1);