function numberOfProduct(product, price, isAdd) {
    let productInput = document.getElementById(product + '-number');
    let productText = productInput.value;
    let productNum = parseInt(productText);
    if (isAdd == true) {
        productNum += 1;
        productInput.value = productNum;
    }
    else if (isAdd == false && productNum > 0) {
        productNum -= 1;
        productInput.value = productNum;
    }
    let totalCost = price * productNum;
    // console.log(totalCost);
    // return totalCost;
    const productPrice = document.getElementById(product + '-total');
    productPrice.innerText = totalCost;
    totalPriceCalculation();



}
function totalPriceCalculation() {
    const phonePrice = document.getElementById('phone-total').innerText;
    const casePrice = document.getElementById('case-total').innerText;
    const subTotal = parseInt(phonePrice) + parseInt(casePrice);
    document.getElementById('sub-total').innerText = subTotal;
    // console.log(subTotal);
    const tax = subTotal / 10;
    document.getElementById('tax-amount').innerText = tax;
    const total = Math.round(subTotal + tax);
    document.getElementById('total-price').innerText = total;

}


document.getElementById('phone-plus').addEventListener('click', function () {
    /* let phoneInput = document.getElementById('phone-number');
    let phoneNumText = phoneInput.value;
    let phoneNum = parseInt(phoneNumText);
    phoneNum += 1;
    phoneInput.value = phoneNum; */
    let phonePrice = numberOfProduct('phone', 1219, true);
    console.log(phonePrice);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    /* let phoneInput = document.getElementById('phone-number');
    let phoneNumText = phoneInput.value;
    let phoneNum = parseInt(phoneNumText);
    if (phoneNum > 0) {
        phoneNum -= 1;
        phoneInput.value = phoneNum;
    } */
    numberOfProduct('phone', 1219, false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    numberOfProduct('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    numberOfProduct('case', 59, false);
});