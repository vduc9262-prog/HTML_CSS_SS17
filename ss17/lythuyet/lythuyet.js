// setItem : tạo key và value 
localStorage.setItem("name","đạt bé bỏng ");

// getItem : lấy value của key 
let nameBylocal = localStorage.getItem("name");
console.log(nameBylocal);


// // removeItem : xóa theo key 

// localStorage.removeItem("name");

// // clear : xóa hết 

// localStorage.clear();

// cách lưu giá trị là mảng hoặc đối tưởng lên loclalStorage 
let todos = [{id: 0, name: "chơi game", status: true },
            {id: 1, name: "chơi game", status: false  },
];
// kiểu dữ liệu Json 

localStorage.setItem("listTodo",JSON.stringify(todos));


// JSON.parse: chuyển JSON về kiểu dữ liệu mảng hoặc ob 
let data = JSON.parse(localStorage.getItem("listTodo"));
console.log(data);
