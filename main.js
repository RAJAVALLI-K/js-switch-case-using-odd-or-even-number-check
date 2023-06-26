// 3-program to check even or odd numbers using switch case

let value = parseInt(prompt('Enter a number:'));
switch (true) {
    case value % 2 == 0:
        console.log("this number even number")
        break;

    default:
        console.log('this number odd number');
        break;
}
