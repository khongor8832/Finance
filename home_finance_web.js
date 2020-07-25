// Дэлгэцтэй ажиллах  контроллер
var uiController = (function() {
    var DOMstrings = {
      inputType: ".add__type",
      inputDescription: ".add__description",
      inputValue: ".add__value",
      addBtn: ".add__btn",
      incomeList: ".income__list",
      expenseList: ".expenses__list",
      tusuvLabel: ".budget__value",
      incomeLabel: ".budget__income--value",
      expenseLabel: ".budget__expenses--value",
      percentageLabel: ".budget__expenses--percentage"
    };
  
    return {
      getInput: function() {
        return {
          type: document.querySelector(DOMstrings.inputType).value, // exp, inc
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: parseInt(document.querySelector(DOMstrings.inputValue).value)
        };
      },
  
      getDOMstrings: function() {
        return DOMstrings;
      },
  
      clearFields: function() {
        var fields = document.querySelectorAll(
          DOMstrings.inputDescription + ", " + DOMstrings.inputValue
        );
  
        // convert list to array 
        // Бичсэн зүйлээ арилгах функц 
        var fieldsArr = Array.prototype.slice.call(fields);
  
        fieldsArr.forEach(function(el, index, array) {
          el.value = "";
        });
         // Курсураа хаана аваачихийг зааж өгдөг.
        fieldsArr[0].focus();
  
        // for (var i = 0; i < fieldsArr.length; i++) {
        //   fieldsArr[i].value = "";
        // }
      },

        tusuviigUzuuleh: function(tusuv) {
            document.querySelector(DOMstrings.tusuvLabel).textContent = tusuv.tusuv;
            document.querySelector(DOMstrings.incomeLabel).textContent = tusuv.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = tusuv.totalExp;

            if(tusuv.huvi !== 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = tusuv.huvi + "%";
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = tusuv.huvi;
            }
            
        },

      addListItem: function(item, type) {
         // Орлого зарлагын элементийг агуулсан HTML-ийг бэлтгэнэ. \
        var html, list;
        if (type === "inc") {
          list = DOMstrings.incomeList;
          html =
            '<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete">            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div>        </div></div>';
        } else {
          list = DOMstrings.expenseList;
          html =
            '<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div>          <div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn">                <i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        // Тэр HTML дотороо орлого зарлага утгуудыг REPLACE ашиглаж өөрчилж өгнө. 
        html = html.replace("%id%", item.id);
        html = html.replace("$$DESCRIPTION$$", item.description);
        html = html.replace("$$VALUE$$", item.value);
  
         // Бэлгэсэн HTML ээ DOM руу хийж өгнө. 
        document.querySelector(list).insertAdjacentHTML("beforeend", html);
      }
    };
  })();
  
  // Санхүүтэй ажиллах  контроллер 
  var financeController = (function() {
    // private data
    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
  
    // private data
    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    var calculateTotal = function(type){
        var sum = 0;
        data.items[type].forEach(function(el){
            sum = sum + el.value;
        });
        data.totals[type] = sum;
    }
    // private data
    var data = {
      items: {
        inc: [],
        exp: []
      },
  
      totals: {
        inc: 0,
        exp: 0
      }, 

      tusuv: 0,

      huvi: 0
    };
  
    return {
        tusuvTootsooloh: function(){
            // нийт орлогын нийлбэрийг тооцоолно.
            calculateTotal('inc');
             // нийт зарлагын нийлбэрийг тооцоолно.
            calculateTotal('exp');
            // Төсөвийг шинээр тооцоолно
            data.tusuv = data.totals.inc - data.totals.exp;
            // Орлого зарлага хувийг тооцоолно. 
            data.huvi = Math.round((data.totals.exp / data.totals.inc) * 100);
        },
        tusuvAvah: function(){
            return{
                tusuv: data.tusuv,
                huvi: data.huvi,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp
            }
        },

        deleteItem: function(type, id){
            var ids = data.items[type].map(function(el){
              return el.id;
            });
            var index = id.indexOf(id);
            if(index !== -1){
              data.items[type].splice(index, 1);
            }
        },

      addItem: function(type, desc, val) {
        var item, id;
  
        if (data.items[type].length === 0) id = 1;
        else {
          id = data.items[type][data.items[type].length - 1].id + 1;
        }
  
        if (type === "inc") {
          item = new Income(id, desc, val);
        } else {
          item = new Expense(id, desc, val);
        }
  
        data.items[type].push(item);
  
        return item;
      },
  
      seeData: function() {
        return data;
      }
    };
  })();
  
  // Программ холбогч контроллер
  var appController = (function(uiController, financeController) {
    var ctrlAddItem = function() {
     // 1. Олж авсан өгөгдлүүдээ дэлгэцээс олж авна.
      var input = uiController.getInput();
  
      if (input.description !== "" && input.value !== "") {
       // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        var item = financeController.addItem(
          input.type,
          input.description,
          input.value
        );
  
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана. 
        uiController.addListItem(item, input.type);
        uiController.clearFields();
  
       // 4. Төсвийг тооцоолно. 
       financeController.tusuvTootsooloh();
        // 5. Эцсийн үлдэгдэл
        var tusuv = financeController.tusuvAvah();
        // 6. Төсвийн тооцоог дэлгэцэнд гаргана. 
        uiController.tusuviigUzuuleh(tusuv);
        
      }
    };
  
    var setupEventListeners = function() {
      var DOM = uiController.getDOMstrings();
  
      document.querySelector(DOM.addBtn).addEventListener("click", function() {
        ctrlAddItem();
      });
  
      document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
          ctrlAddItem();
        }
      });
    };
  
    return {
      init: function() {
        console.log("Application started...");
        uiController.tusuviigUzuuleh({
            tusuv: 0,
            huvi: 0,
            totalInc: 0,
            totalExp: 0
        })
        setupEventListeners();
      }
    };
  })(uiController, financeController);
  
  appController.init();