let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let allergicToHoney = true;

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

if (allergicToHoney) {
    shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
