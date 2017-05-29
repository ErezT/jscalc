
var tasksArray = [];
var taskEntered = "";
var array = document.getElementById('arr');
var list = document.getElementById('list');
// var html = "<ul id=\"list\"> </ul>";

function addToArray() {
taskEntered = document.getElementById('task').value;
tasksArray.push(taskEntered);
// console.log("task: " + taskEntered);
// console.log(tasksArray);
// createItem(taskEntered);
}

function createItem(taskName) {
    var nameOfItem = document.createTextNode(taskName);
    var item = document.createElement("LI");
    item.appendChild(nameOfItem);
    return item;
}

function removeLastItem() {
    tasksArray.pop();
}

// function refreshList() {
//     for(var i = 0; i < tasksArray.length; i++) {
//         var x = createItem(tasksArray[i]);
//         return x;
//     }
// }

function showArray() {
    list.innerHTML = "";
    // var ulNode = "<ul>" + name + "</ul>" ;
    for(var i = 0; i < tasksArray.length; i++) {
        var x = createItem(tasksArray[i]);
        console.log(x);
        list.appendChild(x);
    }

    console.log(list);
}