(function(){
  var gems;
  angular.module("gemStore", []);
  angular.module("gemStore")
    .controller("StoreController", StoreController)
    .controller("TabController", TabController)
    .controller("ReviewController", ReviewController);
  
  function StoreController($log){
    this.products = gems;
    this.purchase = purchase;
    
    function purchase(product){
      $log.warn("clicked");
    };
  };
  function TabController() {
    var vm = this;
    vm.tab = 3,
    vm.setTab = setTab,
    vm.isSet = isSet;
    
    function setTab(tab) {
      vm.tab = tab;
    };
    function isSet(isSet){
      return isSet == vm.tab;
    };
  };
  function ReviewController() {
    this.review = {};
    this.addReview = function(product) {
      this.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    }
  };
  
/*GEMS*/  
      var gems = [{
          name: 'Azurite',
          description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
          shine: 8,
          price: 110.50,
          rarity: 7,
          color: '#CCC',
          faces: 14,
          images: [
            "img/gem-01.png",
            "img/gem-02.png",
            "img/gem-03.png"
          ],
          reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
          }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
          }]
      }, {
          name: 'Bloodstone',
          description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
          shine: 9,
          price: 22.90,
          rarity: 6,
          color: '#EEE',
          faces: 12,
          images: [
            "img/gem-04.png",
            "img/gem-05.png",
            "img/gem-06.png",
          ],
          reviews: [{
              stars: 3,
              body: "I think this gem was just OK, could honestly use more shine, IMO.",
              author: "JimmyDean@example.org",
              createdOn: 1397490980837
          }, {
              stars: 4,
              body: "Any gem with 12 faces is for me!",
              author: "gemsRock@example.org",
              createdOn: 1397490980837
          }]
      }, {
          name: 'Zircon',
          description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
          shine: 70,
          price: 1100,
          rarity: 2,
          color: '#000',
          faces: 6,
          images: [
            "img/gem-07.png",
            "img/gem-08.png",
            "img/gem-09.png"
          ],
          reviews: [{
              stars: 1,
              body: "This gem is WAY too expensive for its rarity value.",
              author: "turtleguyy@example.org",
              createdOn: 1397490980837
          }, {
              stars: 1,
              body: "BBW: High Shine != High Quality.",
              author: "LouisW407@example.org",
              createdOn: 1397490980837
          }, {
              stars: 1,
              body: "Don't waste your rubles!",
              author: "nat@example.org",
              createdOn: 1397490980837
          }]
      }];

})();