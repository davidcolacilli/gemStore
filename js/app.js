(function(){
  var gems, x;
  angular.module("gemStore", []);
  angular.module("gemStore").controller("StoreController", MyFunction);
  
  function MyFunction(){
    this.products = gems;
  };
  
  gems = [
    { name: 'Azurite', price: 2.95, canPurchase: true},
    { name: 'Bloodstone', price: 5.95, canPurchase: true},
    { name: 'Zircon', price: 3.95, canPurchase: false}
  ];
})();