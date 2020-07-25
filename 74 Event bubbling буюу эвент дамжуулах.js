var a = document.getElementById('a');
var b = document.getElementById('c');
var c = document.getElementById('b');
var d = document.getElementById('d');

// a.addEventListener("click", function(event){
//     console.log('A дарагдлаа');
// });
// b.addEventListener("click", function(event){
//     console.log('b дарагдлаа');
// });
// c.addEventListener("click", function(event){
//     console.log('c дарагдлаа');
// });
// d.addEventListener("click", function(event){
//     console.log('d дарагдлаа');
// });


a.addEventListener('click', function(e){
    console.log('A дарагдлаа : ' + e.target.id);
  });

// playcode дээр үз 
