function allNormal(){
    var list = document.getElementById("myList").childNodes;
    for (var i = 0; i < list.length; i++) {
        list[i].style.fontWeight="normal";
    }
}

function getFirstElement(){
    allNormal();
    var firstChild = document.getElementById("myList").firstChild;
    firstChild.style.fontWeight="bold";
}
function getLastElement(){
    allNormal();
    var lastChild = document.getElementById("myList").lastChild;
    lastChild.style.fontWeight="bold";
}
function getNextElement(){
    var currentElement;
    var nextChild;
    var list = document.getElementById("myList").childNodes;
    for (var i = 0; i < list.length; i++) {
        if (list[i].style.fontWeight=="bold") {
            currentElement = list[i];
        }
    }
    allNormal();
    nextChild = currentElement.nextSibling;
    nextChild.style.fontWeight="bold";
}
function getPreviousElement(){
    var currentElement;
    var previousChild;
    var list = document.getElementById("myList").childNodes;
    for (var i = 0; i < list.length; i++) {
        if (list[i].style.fontWeight=="bold") {
            currentElement = list[i];
        }
    }
    allNormal();
    previousChild = currentElement.previousSibling;
    previousChild.style.fontWeight="bold";
}
function addElement(){
    var newElement = document.createElement("li");
    newElement.innerHTML = "Новый элемент";
    document.getElementById("myList").appendChild(newElement);
}
function deleteElement(){
    list = document.getElementById("myList");
    var lastChild = document.getElementById("myList").lastChild;
    list.removeChild(lastChild);
}
function addElementInBegin(){
    var newElement = document.createElement("li");
    newElement.innerHTML = "Новый элемент";
    var firstChild = document.getElementById("myList").firstChild;
    document.getElementById("myList").insertBefore(newElement, firstChild);
    
}
