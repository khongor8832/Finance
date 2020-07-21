// Дэлгэцтэй ажиллах  контроллер
var uiController = (function(){})();







// -----------------------------------------------------------------------------------------

// Санхүүтэй ажиллах  контроллер 
var financeController = (function(){})();







// ----------------------------------------------------------------------------------------

// Программ холбогч контроллер
var appController = (function(uiController, fnController){

    var ctrlAddItem = function(){
        // 1. Олж авсан өгөгдлүүдээ дэлгэцээс олж авна.
            console.log('Дэлгэцээс өгөгдөл авах хэсэг');
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана. 
        // 4. Төсвийг тооцоолно. 
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана. 
    }
 document.querySelector('.add__btn').addEventListener('click', function(){
     ctrlAddItem();
 });

document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
    }
})

})(uiController, financeController);








// Гар нь дээр товч дарагдах event- ийг олж авна. https://developer.mozilla.org/en-US/docs/Web/Events
// Товчын event нийт дэлгэцэн дээр бичигддэг. Товч болгон өөрийн гэсэн тоотой байдаг. 
// http://keycodes.atjayjo.com/  --> Товчны тоо гаргадаг сайт. 
// event.keyCode === 13 --> орчин үеийн Broser дээр ажилладаг. 
// event.which === 13   --> хуучиэ дээр үеийн Broser дээр ажилладаг. 