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
var financeController = (function(){
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      }
      
      var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      };
    
      var data = {
        allItems: {
          inc: [],
          exp: []
        },
        totals: {
          inc: 0,
          exp: 00
        }
      }

})();
// Программ холбогч контроллер
var appController = (function(uiController, fnController){
        
        var ctrlAddItem = function(){
        // 1. Олж авсан өгөгдлүүдээ дэлгэцээс олж авна.
            console.log(uiController.getInput());
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана. 
        // 4. Төсвийг тооцоолно. 
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана. 
    };

    var DOM = uiController.getDomstring();

    var setupEventListeners = function() {
        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem();
        });
       
       document.addEventListener('keypress', function(event) {
           if(event.keyCode === 13 || event.which === 13){
               ctrlAddItem();
           }
       });
    }

return {
    init: function () {
        console.log("Applictation started...");
        setupEventListeners();
    }
};
})(uiController, financeController);

appController.init();
// Гар нь дээр товч дарагдах event- ийг олж авна. https://developer.mozilla.org/en-US/docs/Web/Events
// Товчын event нийт дэлгэцэн дээр бичигддэг. Товч болгон өөрийн гэсэн тоотой байдаг. 
// http://keycodes.atjayjo.com/  --> Товчны тоо гаргадаг сайт. 
// event.keyCode === 13 --> орчин үеийн Broser дээр ажилладаг. 
// event.which === 13   --> хуучиэ дээр үеийн Broser дээр ажилладаг. 

//HTML дээр value гэдэг жинхэнэ утга байдаг харин placeholder нь түр зуурынх байдаг. Дээр нь юм бичиж болдог. 
// Жишээ нь <input value="682565" type="text" class="add__description" placeholder="Add description">