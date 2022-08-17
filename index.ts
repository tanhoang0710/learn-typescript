// Enum (default là number enum)
// 1. Number enum

// default từ 0
// enum Status {
//     PENDING,      // 0
//     IN_PROGRESS,  // 1
//     DONE,         // 2
//     CANCELED      // 3
// }

// bắt đầu từ 3
// enum Status {
//     PENDING = 3, // 3
//     IN_PROGRESS, // 4
//     DONE, // 5
//     CANCELED, // 6
// }

// tự config:
enum Status {
    PENDING = 3,
    IN_PROGRESS = 6,
    DONE = 8,
    CANCELED = 10,
}

// có thể gán giá trị bất kì cho enum variable
const stats1: Status = Status.PENDING;
const stats2: Status = 1;
const stats3: Status = -1;

// number enum --> support reverse mapping
console.log(Status);
console.log(Status[3]); // PENDING
console.log(Status['DONE']); // 8
console.log(stats3); // 8

// 2. String enum
enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
}

fetch('https://example.com/api/endpoint', {
    headers: {
        Accept: MediaTypes.JSON,
    },
}).then((res) => res.json());

// 3. Khi nào dùng enum
// - Khi nào dùng dữ liệu 1 chiều
// - Khi dữ liệu API trả về ko dùng enum, mà dùng union type
