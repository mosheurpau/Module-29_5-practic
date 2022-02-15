const jsBooks = [
    'A Smarter Way to Learn js',
    'JavaScript: The Definitive Guide.',
    'Head First JavaScript Programming: A Brain-Friendly Guide',
    'Eloquent JavaScript, 3rd Edition',
    'The Principles of Object-Oriented'
];
const scherching = 'JavaScript';
const outPut = [];
/* for (const jsBook of jsBooks) {
    if (jsBook.toLocaleLowerCase().indexOf(scherching.toLocaleLowerCase()) != -1) {
        outPut.push(jsBook);
    }
}
console.log(outPut); */
for (const jsBook of jsBooks) {
    if (jsBook.toLocaleLowerCase().includes(scherching.toLocaleLowerCase())) {
        outPut.push(jsBook);
    }
}
// console.log(outPut);

const bigNumber = [23, 54, 6, 5, 7, 697, 56, 43, 76, 8, 72];
const sortNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortNumber);