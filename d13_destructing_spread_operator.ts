const user = { name: "Swagger", age: 30, role: "Admin" };
console.log(user);

const { name: userName, ...rest } = user;
console.log(userName);
console.log(rest);

const newUser = { ...user, age: 18, role: "User" };
console.log(newUser);