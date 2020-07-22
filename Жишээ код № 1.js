/* Кодын модулар архитектур
1. Аппын кодыг модулиудад хуваана. 
2. Модуль нь аппын карим хэсэг кодыг бусдаас тусдаа цэвэрхэн зохион байгуулттай агуулна. 
3. Модуль нь дотороо зарим өгөгдөл функүүдийг далдалж.  зарим өгөгдөл функүүдийг бусад модулиудад хуваалцахаар өгдөг.

// Системийн шинжилгээ зохиомж, 
хэрэглэгчийн шаардлага Системийн шинжээч нар харилцагч байгууллагатай уулзаж тэмдэглэж авна.
ямар2 мод 
1. Товчинд эвент листенер холбох 
2. Бичсэн утгуудыг авах 
3. Бичсэн утгуудыг дотороо хадгалах
4. Бичсэн утгуудыг дэлгэцэнд хадгалах 
5. Үлдэгдэл тооцоолох
6. Үлдэгдлийг дэлгэцэнд үзүүлэх */

//  Модулиудыг үүсгэж турших, git рүү байрлуулах, gitpage дээр байрлуулах, буцааж татах

//  Модулиуд хоорондоо бие биенийхээ хувьсагч руу хандаж чаддаггүй 

/*//жишээ код: 
// Нийтэд нь --> data encapsulation 

var hunController = (function(){

    //private data 
    var bodol = "Javascript толгой эргүүлмээр юм. "; 
    function tsusGuih() { }

    // private function 
    function huchilTurugchAgaaraasSorjTsusruuOruulah() {

    }

    return{
        yrih: function() {
            bodol = "javascript бол лаг";
            huchilTurugchAgaaraasSorjTsusruuOruulah();
            tsusGuih();
            console.log("hi");
        }
    }
})();*/




var uiController = (function(){
    var x = 100;

    function add(y) {
        return x + y;
    }

    return {
        publicAdd: function(a) {
            a = add(a);
            console.log("Боловсруулсан утга : " + a);
        }
    }
})();


var financeController = (function(){})();



var appController = (function(uiController, fnController){
 uiController.publicAdd(50);
})(uiController, financeController);


// Гар нь дээр товч дарагдах event- ийг олж авна. https://developer.mozilla.org/en-US/docs/Web/Events
// Товчын event нийт дэлгэцэн дээр бичигддэг. Товч болгон өөрийн гэсэн тоотой байдаг. 
// http://keycodes.atjayjo.com/  --> Товчны тоо гаргадаг сайт. 
// event.keyCode === 13 --> орчин үеийн Broser дээр ажилладаг. 
// event.which === 13   --> хуучиэ дээр үеийн Broser дээр ажилладаг. 

//HTML дээр value гэдэг жинхэнэ утга байдаг харин placeholder нь түр зуурынх байдаг. Дээр нь юм бичиж болдог. 
// Жишээ нь <input value="682565" type="text" class="add__description" placeholder="Add description">