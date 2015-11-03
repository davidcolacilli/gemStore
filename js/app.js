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
    { name: 'Azurite', price: 2.95, images: ['img/gem-01.png','img/gem-02.png','img/gem-03.png'], canPurchase: true},
    { name: 'Bloodstone', price: 5.95, images: ['img/gem-04.png','img/gem-05.png','img/gem-06.png'], canPurchase: true},
    { name: 'Zircon', price: 3.95, canPurchase: false}
    /*{ name: 'Zircon', price: 3.95, images: ['img/gem-07.png','img/gem-08.png','img/gem-09.png'], canPurchase: false}*/
  ];
})();