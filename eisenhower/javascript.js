
var tasksArray = [];
var resultArray = [];
var lastArray = [];
// var imp_urg = [];
// var imp_less_urg = [];
// var less_imp_urg = [];
// var less_imp_less_urg = [];

var taskEntered = "";
var array = document.getElementById('arr');
var list = document.getElementById('list');

function addToArray() {
taskEntered = document.getElementById('task').value;
tasksArray.push(taskEntered);
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


function showArray() {
    list.innerHTML = "";
    for(var i = 0; i < tasksArray.length; i++) {
        var idNum = i;
        var x = createItem(tasksArray[i]);
        x.setAttribute("draggable", true);
        x.setAttribute('ondragstart', 'drag(event)');
        x.setAttribute('id', idNum);
        console.log(x);
        list.appendChild(x);
    }

    console.log(list);
}

function test(arr, ite) {
    arr.push(ite);
}

                                            //DRAG AND DROP FUNCTIONS
//********************************************************************************************************
function allowDrop(ev) {
    // event.target.style.color = 'blue';
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('val', ev.target.value);
    ev.dataTransfer.setData("id", ev.target.id);
    // ev.dataTransfer.setData("text/plain", ev.target.);
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("id");
    var indexOfMovingItem = ev.dataTransfer.getData("val");
    console.log("id " + id);
    console.log("val " + indexOfMovingItem);
    resultArray.push(id);
    test(lastArray, id);
    ev.target.appendChild(document.getElementById(id));
    ev.dataTransfer.clearData();
}
//********************************************************************************************************


