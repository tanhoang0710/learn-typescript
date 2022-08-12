// let count = 5;
// count = 'five'
// lỗi string ko thể gán cho number

let count: any = 5;
count = 'five';
// no error now

// 3 kiểu dữ liệu number, string, boolean có thể bỏ khi khai báo

// Với const, khi omit anotaion, literal type sẽ được sử dụng, vì const chỉ nhận được 1 giá trị, ko thể thay đổi được
// vd: const a = 1, thì a sẽ có kiểu dữ liệu là 1, ko phải number, let a = 1 thì a có kiểu dữ liệu là number

function getStatusName(state: 'active') {
    console.log(state);
}

let s = 'active';
getStatusName(s as 'active');
