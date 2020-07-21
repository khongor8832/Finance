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