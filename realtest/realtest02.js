let users = [

    { id: 1, name: "이성계" },

    { id: 2, name: "이방과" },

    { id: 3, name: "이방원" }

];
console.log(users);

let userMap = users.map(user => {
  user.id = user.id *= 2;
  return user.id;
});

console.log(userMap);     // 예상 결과: [2, 4, 6]




