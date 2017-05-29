
var tasksArray = [];
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
        var idNum = tasksArray[i];
        var x = createItem(tasksArray[i]);
        x.setAttribute("draggable", true);
        x.setAttribute('ondragstart', 'drag(event)');
        x.setAttribute('id', idNum);
        console.log(x);
        list.appendChild(x);
    }

    console.log(list);
}

                                            //DRAG AND DROP FUNCTIONS
//********************************************************************************************************
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("LI", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("LI");
    ev.target.appendChild(document.getElementById(data));
}
//********************************************************************************************************


