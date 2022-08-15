// Type alias: đặt tên lại cho 1 kiểu dữ liệu
// vd: type StudentName = string
// it hữu dụng vì cơ bản mình có thể dùng trực tiếp primitive cho khoẻ

// Union type: cho phép tạo ra kiểu dữ liệu mới kết hợp 2 hoặc nhiều kiểu dữ liệu
// VD:
type Status = 'active' | 'inactive';
type ProductStatus = 1 | 2 | 3 | 4;
type StudentId = number | string;

interface Student {
    id: number | string;
    name: string;
    gender: 'male' | 'female';
    grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

let x: number | string = 1;
x = 'super'; //works
x = 123; // works
// x = false lỗi: Type 'boolean' is not assignable to type 'string | number'.ts(2322)

// Intersection type
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// gộp thì key trùng nhau cần cùng kiểu dữ liệu

type Employee = Identity & Contact; // lấy tất cả các thuộc tính từ 2 interface
type Customer = BusinessPartner & Contact; // lấy tất cả các thuộc tính từ 2 interface
// VD:
let c: Customer = {
    name: 'ABC Inc.',
    credit: 123123,
    email: 'sales@abcinc.com',
    phone: '123123123',
};

// interface way
// interface Employee extends Identity, Contact {}
// interface Customer extends BusinessPartner, Contact {}

// Add new props
// cho phép thêm props vào interface, ko dùng được cho type alias
interface Student1 {
    id: number;
    name: string;
}

interface Student1 {
    age: number;
}

const alice: Student1 = {
    id: 1,
    name: 'Alice',
    age: 21,
};
