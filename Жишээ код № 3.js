/*var html = " sain uu "
html = html.replace("uu", "baina uu");
console.log(html); 

// нэгийг сольж байна. 
var html = " <p> sain uu </p> "
html = html.replace("p", "strong");
console.log(html); 

// Бүгдэнг солий гэвэл
var html = " <p> sain uu </p> "
 html = html.replace(/p/g, "strong");
console.log(html); 

// Том жижиг үсэг хамаагүй бүгдэнг солий гэвэл
var html = " <p> sain uu </P> "
 html = html.replace(/p/gi, "strong");
console.log(html); */

var incDiv = document.querySelector(".income"); 
incDiv.insertAdjacentHTML("beforeend", "Цалин : 2500000");

var incDiv = document.querySelector(".income"); 
incDiv.insertAdjacentHTML("beforeend", "<br>Сугалаа : 350000");

var incDiv = document.querySelector(".income"); 
incDiv.insertAdjacentHTML("beforeend", "<br>Сугалаа : 350000");