

var tasksArray = [];
var taskEntered = "";
var array = document.getElementById('arr');
var list = document.getElementById('list');
function addToArray() {
taskEntered = document.getElementById('task').value;
tasksArray.push(taskEntered);
console.log("task: " + taskEntered);
console.log(tasksArray);
createItem(taskEntered);
// array.innerHTML = tasksArray;
}

function createItem(taskName) {
    var item = document.createElement("li");
    var nameOfItem = document.createTextNode(taskName);
    item.appendChild(nameOfItem);
    list.appendChild(item);
}
