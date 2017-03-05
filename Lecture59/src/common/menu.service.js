(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getMenuItem = function (shortName) {
      var shortNameUC = shortName.toUpperCase();
      return $http.get(ApiPath + '/menu_items/' + shortNameUC + '.json')
        .then(function (favItem) {
          console.log("getMenuItem successful. customerFav was found among Menu Items");
          return favItem.data;
        }).catch(function(error) {
          console.log("something went terribly wrong w/ service.getMenuItem")
        });
    };

    service.saveMenuItem = function (menuItem) {
      return $http.put(ApiPath + '/menu_items/' + menuItem.short_name, menuItem)
        .then(function (response) {
          return response.data;
        }).catch(function(error) {
          console.log("something went terribly wrong w/ service.saveMenuItem")
      });
    };
  }


})();
