app.controller('formCtrl', function($scope, $http, $location, $anchorScroll, $rootScope, LoadingIndicatorService) {
   $rootScope.isLoading = true;
   $scope.roofpikData = {};
   $scope.url = "";
   $scope.passValue = function(key, value) {
      $scope.roofpikData[key] = key;
   }
   $scope.showing = false;

   $scope.show = function(index) {
      $scope.showing = $scope.showing === index ? false: index;
      $location.hash('table_'+index);
      $anchorScroll();
   }

   var jsonObject = {
      projectType: "",
      rating: "",
      price: ""
   }
   var acres99 = {
      projectType: "Villa",
      rating: "5",
      price: "100000"
   }
   var magicBricks = {
      projectType: "Apartment",
      rating: "4",
      price: "90000"
   }
   var xyz = {
      projectType: "Apartment",
      rating: "2",
      price: "100000"
   }
   $scope.jsonObject = jsonObject;
   // $scope.acres99 = acres99;
   // $scope.magicBricks = magicBricks;
   $scope.xyz = xyz;
   $scope.submit = function() {
      console.log($scope.roofpikData);
   };

   $scope.sendUrl = function(url) {
      LoadingIndicatorService.loadingStart();
      console.log(url);
      console.log(angular.isString(url));
      console.log(angular.isObject(url));
      console.log($scope.url);
      $http({
         method: 'POST',
         url: 'http://192.168.2.39:5000/projectentry/?url='+url
      }).then(function success(response) {
         if(url.indexOf('99acres') != -1) {
            $scope.acres99 = response.data.temp;
            LoadingIndicatorService.loadingEnd();
         }
         else if(url.indexOf('squareyards') != -1) {
            $scope.xyz = response.data.temp;
            LoadingIndicatorService.loadingEnd();
         }
         console.log(response );
      }, function error(response) {
         console.log(response);
         LoadingIndicatorService.loadingEnd();
      });
   }

   $http.get('data/data.json').success(function(response) {
      $scope.json = response;
      $rootScope.isLoading = false;
   });
   // console.log(Object.getOwnPropertyNames($scope.acres99['units']).length);

});