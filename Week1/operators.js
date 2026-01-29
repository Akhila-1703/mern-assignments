function totalBillAmount() {
    let totalAmount = 0;        // starting bill amount

    totalAmount += 500;         // adding first item price
    totalAmount += 1200;        // adding second item price

    totalAmount -= 200;         // applying discount

    let gst = totalAmount * 0.18; // calculating 18% GST
    totalAmount += gst;         // adding GST to total

    return totalAmount;         // returning final payable amount
}

console.log("Final bill amount is ", totalBillAmount()); // printing the result

