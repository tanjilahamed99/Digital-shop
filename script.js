function addItems(priceID, userId) {
    const productsPrice = idToInnerText(priceID);
    // set total price 
    totalPriceSet(productsPrice);
    // setProductsName
    setProductsName(userId);
    // set totalAmount 
    const totalAmountElement = document.getElementById('total-amount');
    const totalAmountText = totalAmountElement.innerText;
    const totalAmount = parseFloat(totalAmountText);
    totalAmountElement.innerText = totalAmount + productsPrice;

    // discount system
    const purchaseBtn = document.getElementById('Purchase-btn')
    const discountBtn = document.getElementById('discount-btn')
    if (productsPrice > 0) {
        purchaseBtn.removeAttribute('disabled');
        if (productsPrice >= 800) {
            discountBtn.removeAttribute('disabled');
            discount();
        };
    }
}
const purchaseBtn = document.getElementById('Purchase-btn').addEventListener('click', function () {
    const totalAmount = document.getElementById('total-amount').innerText = 0;
    const total = document.getElementById('total').innerText = 0;
    const discountMoneyElement = document.getElementById('discount-money').innerText = 0;
    const parentDiv = document.getElementById('product-count').innerHTML = '';

});