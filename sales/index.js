let array = [
    {item: "Laptop", quantity: 10, price: 999.99},
    {item: "Tablet", quantity: 15, price: 299.99},
    {item: "Smartphone", quantity: 25, price: 499.99},
]

function calculateTotalSales(totalSales) {
    totalSales = 0;
    for (let i = 0; i < array.length; i++) {
        totalSales += array[i].quantity * array[i].price;
    }
    return totalSales;
}

console.log("Total amount sales: $" + calculateTotalSales(array));

function generateReceipt(input_array){
    let grandTotal = 0;
    for (let i = 0; i < input_array.length; i++) {
        const priceForItem = input_array[i].quantity * input_array[i].price;
        console.log("Total for item " + input_array[i].item + ": $" + priceForItem.toFixed(2));
        grandTotal += priceForItem;
    }

    console.log("Grand total: $" + grandTotal.toFixed(2));

}

generateReceipt(array);

const passwordsExample = ["somepassword1234", "another*(&password", "yetan234otherpassword","ghry"];

function validatePasswords(passwords){
    for (let i = 0; i < passwords.length; i++){
        const password = passwords[i];
        if (password.length < 8 || password.length > 20) {
            console.log("Password '" + password + "' It must be at least 8 characters long and maximum 20 chracters long.");
        }
        //contain only letters and numbers
        else if (!/^[a-zA-Z0-9]+$/.test(password)) {
            console.log("Password '" + password + "' It must contain only letters and numbers.");
        }
        else{
            console.log("password '" + password + "' is valid.");
        }

    }
}

validatePasswords(passwordsExample);

const products = [{product: "Laptop", stock: 200}, {product: "Tablet", stock: 0}, {product: "Smartphone", stock: 300}];

function checkStock(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.stock > 0) {
            console.log("Product '" + product.product + "' is in stock.");
        } else {
            console.log("Product '" + product.product + "' is out of stock.");
        }
    }
}

checkStock(products);

