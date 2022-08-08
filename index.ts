// 1. strict flag
// bật strict bằng true, thì những config liên quan tới strict sẽ true hết, nhưng độ ưu tiên của các config đấy cao hơn, nghĩa là strict=true mà noImplicitAny=false thì giá trị cuối cùng vẫn là noImplicitAny=false

// 2. Option: noImplicitAny
// Khi TS ko thể xác định được kiểu dữ liệu của 1 biến nào đó, thì biến đó sẽ đc mang giá trị any
// Khi true, nó sẽ báo lỗi nếu trường hợp này xảy ra, ngược lại bỏ qua

const isEmpty = (numberList: number[] = []) => {
    return numberList.length === 0;
};
console.log(isEmpty([1, 2, 3]));

// 3. Option: strictNullChecks
// Khi bật lên true sẽ báo lỗi khi null/undefined được sd ko đúng. VD như gọi những hàm của number, string, array, ... chẳng hạn
// Khi config false thì sẽ bỏ qua, nhưng có rủi ro xảy ra lỗi lúc runtime

let str;

if (Math.random() > 0.5) {
    str = '';
}

//str.toString() sẽ báo lỗi Object is possibly 'undefined'

// 4. Option: alwaysStrict
// Khi bật lên thí TS sẽ luôn parse files ở chế độ strict mode và sẽ có "use strict" ở đầu file JS đc tạo ra

// 5. Other options:
// - strictBindCallApply: Đảm bảo bind, call, apply được gọi đúng args
// - strictFunctionTypes: Đảm bảo dữ liệu cho parameters của func(ko áp dụng cho method)
// - strictPropertyInitializer: Đảm bảo thuộc tính của class phải được khởi tạo
// - noImplicitThis: Đảm bảo this ko mang kiểu dữ liệu any
// - useUnknownInCatchVariables: Đảm bảo là biến trong catch là kiểu unknown
