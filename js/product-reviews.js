(function () {
  angular.module("ProductReviews")
  .controller("ProductReviews", ProductReviews);
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
})();