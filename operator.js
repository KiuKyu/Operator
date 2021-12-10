let inputWidth = prompt('Enter the width');
let inputHeight = prompt('Enter the height');

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

// Viết tắt hơn :
// let width = parseInt(prompt('Enter the width'));
// let height = parseInt(prompt('Enter the height'));

let area = width * height;
document.write('The area is: ' + area);