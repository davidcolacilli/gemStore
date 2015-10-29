(function(){
  var gems;
  angular.module("gemStore", []);
  angular.module("gemStore").controller("StoreController", MyFunction);
  
  function MyFunction($log){
    this.products = gems;
    this.purchase = purchase;
    
    function purchase(product){
      $log.warn("clicked");
    };
  };
  
  gems = [
    { name: 'Azurite', price: 2.95, canPurchase: true},
    { name: 'Bloodstone', price: 5.95, canPurchase: true},
    { name: 'Zircon', price: 3.95, canPurchase: false}
  ];
})();