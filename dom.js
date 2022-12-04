
// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// var headtitle = document.getElementById("header-title");
// headtitle.textContent = "changed";


// const mainheader = document.getElementById("main-header");

// mainheader.style.borderBottom = "10px solid black";

// const title = document.getElementsByClassName("title");

// console.log(title);
// title[0].style.fontWeight = "bold";
// title[0].style.color = "green";


// const list = document.getElementsByClassName("list-group-item");
// console.log(list);
// list[2].style.backgroundColor = "green";
// list[2].style.color = "white";



// for(let ele of list){
//     ele.style.fontWeight = "bold";
// }

// const items = document.getElementsByTagName("li");
// items[4].style.fontWeight = "bold";
// items[4].style.listStyle = "none";
// items[4].classList.add("list-group-item");


// const listItem = document.querySelectorAll(".list-group-item");
// console.log(listItem);
// for(let i in listItem){
//     if (i % 2 == 0){
//         listItem[i].style.backgroundColor = "green";
//         listItem[i].style.color = "white";
//     }
// }
// listItem[1].style.color = "green";
// listItem[2].style.visibility = "hidden";


// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// var newDiv = document.createElement("div");

// newDiv.className = "hello";

// newDiv.id = "hello1";
// newDiv.setAttribute("title", "Hello Div");

// var newDivText = document.createTextNode("Hello World");

// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-success btn-sm float-right edit";
  editBtn.appendChild(document.createTextNode("EDIT"));

  li.appendChild(editBtn);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  document.getElementById("item").value = "";
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}