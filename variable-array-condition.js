var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// array
var items = ['mobile', 'mouse', 'notepaper', 'lighter', 'laptop', 'keyboard', 'charger', 'plug', 'gamsa']
console.log(items.indexOf('lighter'));
items.pop();
console.log(items);
items.push('stand');
console.log(items);

// conditionals
if (items.length >= 4) {
    console.log('You have to many stuff on your desk.')
}
else if (items.length == 4) {
    console.log('wow. You only have 4 items')
}
else {
    console.log("wow! you have clean desk")
}