// Utility Types
// Partial<Type> - ko can du cac key

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

// Required<Type> - nguoc voi Partial, can du cac key

// Readonly<Type> - ko assign duoc sau khi init

// Record<Keys, Type>
type CatName = 'miffy' | 'boris' | 'mordred';

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
};

console.log(cats);

// Pick<Type, Keys> - định nghĩa 1 kiểu dữ liệu mới dựa trên việc pick các key từ kiểu dữ liệu cũ
interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo1, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'clean room',
    completed: false,
};

console.log(todo);

// Omit<Type, Keys> - nguoc lai voi Pick - chi lay những key, trừ những key

// ReturnType<Type> - Lấy kiểu trả về của 1 hàm
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
