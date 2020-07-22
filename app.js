// Дэлгэцтэй ажиллах  контроллер
var uiController = (function(){
    var DOMstring = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDescription).value, 
                value: document.querySelector(DOMstring.inputValue).value 
            };
        }, 
        getDomstring: function () {
            return DOMstring;
        }
    };
})();
// Санхүүтэй ажиллах  контроллер 
var financeController = (function(){})();
// Программ холбогч контроллер
var appController = (function(uiController, fnController){
        var DOM = uiController.getDomstring();
        var ctrlAddItem = function(){
            console.log(uiController.getInput());
          }
 document.querySelector(DOM.addBtn).addEventListener('click', function(){
     ctrlAddItem();
 });
document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
    }
})
})(uiController, financeController);
