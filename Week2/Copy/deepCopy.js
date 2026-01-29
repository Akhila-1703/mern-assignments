/*
Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                orderId: "ORD1001",
                customer: {
                    name: "Anita",
                    address: {
                city: "Hyderabad",
                pincode: 500085
                    }
                },
                items: [
                    { product: "Laptop", price: 70000 }
                ]
                };

🎯 Task:
    1. Create a deep copy of order
    2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/

const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
            }
        },
    items: [{ product: "Laptop", price: 70000 }]
};
const orderCopy = structuredClone(order)  //copying order into another object to update changes
orderCopy.customer.address.city = 'Nagpur'  //changing city of copied object
orderCopy.items[0].price = 80000    //changing price of copied object
console.log('order is', order)      //verifying whether original object remains unchanged with copied object
console.log('ordercopy is',orderCopy)