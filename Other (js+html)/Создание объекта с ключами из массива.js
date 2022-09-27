let array = [ 
    {id: 1, name: "John Smith", age: 20},
    {id: 2, name: "Ann Smith", age: 24},
    {id: 3, name: "Pete Peterson", age: 31},
  ];

alert (createObject(array))

function createObject(array) {
    return array.reduce((object, value) => { object[value.id] = value ; return object; }, {})
  }

// let value = arr.reduce(function(accumulator, item, index, array) { ... }, [initial]);