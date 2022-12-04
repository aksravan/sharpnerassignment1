
console.dir(document);
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
var headtitle = document.getElementById("header-title");
headtitle.textContent = "changed";


const mainheader = document.getElementById("main-header");

mainheader.style.borderBottom = "10px solid black";

const title = document.getElementsByClassName("title");

console.log(title);
title[0].style.fontWeight = "bold";
title[0].style.color = "green";


const list = document.getElementsByClassName("list-group-item");
console.log(list);
list[2].style.backgroundColor = "green";
list[2].style.color = "white";



for(let ele of list){
    ele.style.fontWeight = "bold";
}

const items = document.getElementsByTagName("li");
items[4].style.fontWeight = "bold";
items[4].style.listStyle = "none";
items[4].classList.add("list-group-item");


const listItem = document.querySelectorAll(".list-group-item");
console.log(listItem);
for(let i in listItem){
    if (i % 2 == 0){
        listItem[i].style.backgroundColor = "green";
        listItem[i].style.color = "white";
    }
}
listItem[1].style.color = "green";
listItem[2].style.visibility = "hidden";


var itemList = document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

var newDiv = document.createElement("div");

newDiv.className = "hello";

newDiv.id = "hello1";
newDiv.setAttribute("title", "Hello Div");

var newDivText = document.createTextNode("Hello World");

newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);