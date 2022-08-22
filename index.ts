// Generics
// Hiểu nôm na là kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng

interface Student {
    id: number;
    name: string;
}

const numberList: Array<number> = [1, 2, 3];
const wordList: Array<string> = ['easy', 'frontend'];

const studentList: Array<Student> = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// VD:
interface List<T> {
    length: number;
    [index: number]: T;
}

const numberList1: List<number> = [1, 2, 3];
const wordList1: List<string> = ['easy'];

const studentList1: List<Student> = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

type StudentKeys = keyof Student;
// danh sach key cua Student
const keys: StudentKeys = 'id';
