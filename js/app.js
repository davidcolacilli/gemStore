(function(){
  var gems;
  angular.module("gemStore", []);
  angular.module("gemStore")
    .controller("StoreController", StoreController)
    .directive("productDescription", ProductDescription)
    .directive("productSpecs", ProductSpecs)
    .directive("productTabs", ProductTabs)
    .directive("productReviews", ProductReviews)
    .directive("productGallery", ProductGallery);
  
  //Controller functions
  function StoreController($log){
    this.products = gems;
    this.purchase = purchase;
    
    function purchase(product){
      $log.warn("clicked");
    };
  };
  
  //Directive functions
  function ProductDescription() {
    return {
      restrict: 'E',
      templateUrl: '../product-description.html'
    };
  };
  function ProductSpecs() {
    return {
      restrict: 'A',
      templateUrl: '../product-specs.html'
    };
  };
  function ProductTabs() {
    return {//always return
      restrict: 'E',
      templateUrl: '../product-tabs.html',
      controller: function() {//here, as a inner method
        var vm = this;
        vm.tab = 1,
        vm.setTab = setTab,
        vm.isSet = isSet;
        
        function setTab(tab) {
          vm.tab = tab;
        };
        function isSet(isSet){
          return isSet == vm.tab;
        };
      },
      controllerAs: 'tab'
    }
  };
  function ProductReviews() {
    return {
      restrict: 'E',
      templateUrl: '../product-reviews.html',
      controller: function() {
        var vm = this;
        vm.review = {};
        vm.addReview = function(product) {
          vm.createdOn = Date.now();
          product.reviews.push(vm.review);
          vm.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  }
  function ProductGallery() {
    return {
      restrict: 'E',
      templateUrl: '../product-gallery.html',
      controller: function() {
        var vm = this;
        vm.current = 0;
        vm.setImg = function(img) {
          vm.current = img || 0;
        };
      },
      controllerAs: 'gallery'
    };
  }
  
  
  
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