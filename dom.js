
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
listItem[1].style.color = "green";
listItem[2].style.visibility = "hidden";
