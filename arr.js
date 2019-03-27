//判断某个值是否在数组中
var arr = ["29926392220", "29965620629", "28003663436", " ", "666666"];
var str = [{
    name: "test1",
    id: "12334"
  },
  {
    name: "test2",
    id: "666666"
  },
];
str.filter(item => {
  console.log(arr.indexOf(item.id)); //-1 4
})