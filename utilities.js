//give me price element id then i will give you the inner value
function idToInnerText(id) {
    const priceElement = document.getElementById(id);
    const priceText = priceElement.innerText;
    const price = parseFloat(priceText);
    return price;
}

//set price in totals
function totalPriceSet(productsPrice) {
    const totalPriceElement = document.getElementById('total');
    const totalPriceText = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceText);
    totalPriceElement.innerText = totalPrice + productsPrice;
}

//set products name

function setProductsName(productsId) {
    const productNameElement = document.getElementById(productsId);
    const productName = productNameElement.innerText;
    const div = document.getElementById('product-count');
    const p = document.createElement('p');
    p.style.fontWeight = '500';
    p.style.fontSize = '20px';
    const count = div.childElementCount;
    p.innerHTML = `${count + 1} : ${productName}`;
    div.appendChild(p);
}

function discount(totalPrice) {
    document.getElementById('discount-btn').addEventListener('click', function () {
        // discount input
        const discountInputElement = document.getElementById('discount-input');
        const discountInput = discountInputElement.value;
        discountInputElement.value = '';
        // promo code
        const promoCodeElement = document.getElementById('promo-code');
        const promoCode = promoCodeElement.innerText;
        //
        if (discountInput == promoCode) {
            const totalAmountElement = document.getElementById('total-amount');
            const totalAmountText = totalAmountElement.innerText;
            const totalAmount = parseFloat(totalAmountText);
            const discountWithTotal = totalAmount - (totalAmount * 0.20);
            totalAmountElement.innerText = discountWithTotal;
            // discount 
            const discount = totalAmount * 0.20;
            const discountMoneyElement = document.getElementById('discount-money').innerText = discount;
        } else {
            alert('your promo code invalid')
        }
    });
};