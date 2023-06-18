function updateLight(current) {
    switch (current) {
        case "green":
          current = "yellow";
          break;
        case "yellow":
          current = "red";
          break;
        case "red":
          current = "green";
          break;
        default:
          current = "Something wrong..."
          break;
    }
    return current;
}

/*

Простейшее решение:
function updateLight(current) {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

или

const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]

*/