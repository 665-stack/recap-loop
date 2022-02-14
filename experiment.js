function findOddNumber(number) {
    for (let i = 0; i < number; i++) {
        const reminder = number % 2 != 0;
        return reminder;
    }
}
const getOddNumber = findOddNumber(43);
console.log(getOddNumber);