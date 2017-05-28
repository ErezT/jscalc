

var tasksArray = [];
var taskEntered = "";
var array = document.getElementById('arr');
var list = document.getElementById('list');


function addToArray() {
taskEntered = document.getElementById('task').value;
tasksArray.push(taskEntered);
// console.log("task: " + taskEntered);
// console.log(tasksArray);
// createItem(taskEntered);
refreshList();
}


function createItem(taskName) {
    var item = document.createElement("li");
    var nameOfItem = document.createTextNode(taskName);
    item.appendChild(nameOfItem);
    list.appendChild(item);
    
}

function removeLastItem() {
    tasksArray.pop();
    list.removeLastItem;
    console.log(tasksArray);
    refreshList();
}

function refreshList() {
    for(var i = 0; i < tasksArray.length; i++) {
        createItem(tasksArray[i]);
    }
}