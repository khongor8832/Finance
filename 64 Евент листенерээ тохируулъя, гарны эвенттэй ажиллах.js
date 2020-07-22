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
        }};})();
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
        items: {
          inc: [],
          exp: []
        },
        totals: {
          inc: 0,
          exp: 0
        }}
      return{
          addItem: function(type, desc, val ) {
              var item, id;
            if(data.items[type].length === 0) id = 1;
            else{
                id = data.items[type][data.items[type].length - 1].id + 1;
            }
            if(type === 'inc'){
                item = new Income(id, desc, val);
            }else{
                item = new Expense(id, desc, val);
            }
              data.items[type].push(item);
          },

          seedata: function(){
              return data;
          }
        };
    })();
// Программ холбогч контроллер
var appController = (function(uiController, fnController){

                var ctrlAddItem = function(){
        // 1. Олж авсан өгөгдлүүдээ дэлгэцээс олж авна.
            var input = uiController.getInput();
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
             financeController.addItem(input.type, input.description, input.value);
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана. 
        // 4. Төсвийг тооцоолно. 
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана. 
    };
    
    
    var setupEventListeners = function() {
        var DOM = uiController.getDomstring();
        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem();
        });

        document.addEventListener('keypress', function(event) {
           if(event.keyCode === 13 || event.which === 13){
               ctrlAddItem();
           }
       });
    };

return {
    init: function () {

        console.log("Applictation started...");
        setupEventListeners();
    }
};
})(uiController, financeController);

appController.init();







