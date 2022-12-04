
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