// eibabe array er moddo thake elements gulo loop er maddome ber kore fela posible
var numbers = [24, 10, 38, 86, 59, 39, 27];
for (i = 0; i <= 6; i++) {
    var element = numbers[i];
    console.log(element);
}
// but opporer system e elements gulo loop er moddome ber korte gele 1ta problem o ace. for er condition e kinto "i <= 7" deya ace. ata deya thakle porobortite jobi abar push/pop kora hoy tokhon problem hobe. Ar tai "i <= 6" na likhe oi variable er name er shathe .length add kore dilei ei problem solve.
// another example with .length
var friends = ['junayed', 'naeeem', 'shahin', 'mahmodul', 'sadikul', 'rana'];
for (i = 0; i <= friends.length; i++) {
    var element = friends[i];
    console.log(element);
}
// another example
var items = ['mobile', 'sunglass', 'laptop', 'charger', 'diary', 'headphone', 'mouse', 'mousepad', 'papers']

for (var i = 0; i < items.length; i++) {
    var element = items[i];
    console.log(element);
}
//another example
var myUsesWebsite = ['stackoverflow', 'programming hero', 'w3school', 'quora', 'google finance', 'freecodecamp', 'mozila', 'pxels'];
for (var i = 0; i <= myUsesWebsite.length; i++) {
    var webCount = myUsesWebsite[i];
    console.log(webCount);
}
