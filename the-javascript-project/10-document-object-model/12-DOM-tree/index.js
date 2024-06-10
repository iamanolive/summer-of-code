const rootNode = document.getRootNode();

console.log(rootNode);
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
console.log(htmlElementNode.childNodes);

// child relationship
const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);
const textNode1 = htmlElementNode.childNodes[1];
console.log(textNode1);
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);


// parent relationship
console.log(headElementNode.parentNode);


// sibling relationship
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextSibling.nextSibling.nextSibling);
// ignoring text nodes
console.log(headElementNode.nextElementSibling);


// text content
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.textContent);
console.log(headElementNode.textContent);

console.log(headElementNode.childNodes);


const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333";

let body = h1.parentNode.parentNode;
body = document.body;


const head = document.querySelector("head");
console.log(head);

const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children);