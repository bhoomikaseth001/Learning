function discountCalculator(discount){
    return function(price){
        return price - price*(discount/100);
    }
}
let discount = discountCalculator(10);
console.log(discount(200));