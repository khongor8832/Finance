var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
  
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
  var i1 = new Income (1, 'tsalin', 2500000);
  var i2 = new Income (1, 'Сугалаанд хожсон', 100000);
  
  // console.log(i1);
  // console.log(i2);
  
  var incomes = [];
  
  incomes.push(i1);
  incomes.push(i2);
  
  console.log(incomes);
  console.log(incomes[1].description);  //Массиваас id - гаар хэвлэх 

//   ---------------------------------------------------------------
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
      }

      var incomes = [];
      var expenses = [];

      var totalIncomes = 0;
      var totalExpenses = 0;

})();
// *******************Дээрх кодын уяан хатан болгосон ***********************************************
var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
  
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
  var i1 = new Income (1, 'tsalin', 2500000);
  var i2 = new Income (1, 'Сугалаанд хожсон', 100000);
 
  var data = {
    allItems: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 100,
      exp: 50
    },
  }
  data.allItems.inc.push(i1);
  console.log(data.allItems.inc[0])
  // *************************************************************************
  var data = {
    items: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    }
  }
  var type = 'inc';
  var desc = 'Цалин';
  var val = 25000; 

  data .items[type].push(desc);
  console.log(data.items);


  // data .items.inc.push(desc);
  // console.log(data);
  // . Тавьж хандахаас гадна массивын хаалтаар хандаж чаддаг. давуу талтай 
  // *****************************************************************

  var data = {
    items: {
      inc: [1, 4, 44, 72],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    }
  };
  var type = 'inc';
  var desc = 'Цалин';
  var val = 25000; 

 console.log(data.items[type][data.items[type].length - 1]);
//  массивын сүүлийн элемент гаргаж ирж байна. id болгож байна. 
  
  