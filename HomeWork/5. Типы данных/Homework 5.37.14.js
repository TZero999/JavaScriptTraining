let data = [
    {id: 1, name: "John Smith", age: 20},
    {id: 2, name: "Ann Smith", age: 24},
    {id: 3, name: "Pete Peterson", age: 31},
    {id: 4, name: "Jack Richards", age: 43}, 
    {id: 5, name: "Adam Linch", age: 33},
  ];

alert (grouping(data));

function grouping (array) {
return array.reduce( (object, id) => { object[id.id] = id ; return object;},{})
    
}