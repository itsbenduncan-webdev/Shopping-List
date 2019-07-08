var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
};

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        deleteButton();
        listLength();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
        deleteButton();
        listLength();
    }
}

ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
}

function listLength() {
    return listItems.length;
}

function removeParent(event){
    event.target.parentNode.remove();
}

function deleteButton(){
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}

for (i = 0; i < listLength(); i++) {
    deleteButton();
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
