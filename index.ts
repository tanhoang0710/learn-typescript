// 1. Explicit type - khai bao tuong minh kieu du liệu
let a: number = 10;

// 2. Infered type - TS tự suy diễn ra được kiểu dữ liệu của biến, nếu ko duy diễn đc sẽ là any
let string = 'Tanhun';

// 3. Eraised type - Sau khi compile từ TS sang JS, tất cả các type annotation sẽ bị xoá
const greeting: string = 'hello';
// compile sang JS sẽ thành
// var greeting = 'hello'

// 4. Downleveling - compile sang JS theo target trong tsconfig
// VD
const exp = `xin chao ${string}`;
// neu target la es5, thi sau khi compile sang JS se thanh
// var exp = "xin chao" + string;
// neu target la es6, thi sau khi complie sang JS se thanh
// const exp = `xin chao ${string}`
