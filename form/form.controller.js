app.controller('formCtrl', function($q, $scope, $http, $location, $anchorScroll, $rootScope, LoadingIndicatorService) {
   $rootScope.isLoading = true;
   $scope.roofpikData = {};
   $scope.url = "";
   $scope.data = {
      acres99: "",
      magicBricks: "",
      commonFloor: ""
   };
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

   var unitsLength = 0;

   $scope.jsonObject = jsonObject;
   // $scope.acres99 = acres99;
   // $scope.magicBricks = magicBricks;
   $scope.xyz = xyz;
   $scope.submit = function() {
      fixUnitIDs().then(function(response) {
         console.log(response);
         console.log($scope.roofpikData);
         var key = db.ref().child('roofpikData/').push().key;
         var updates = {};
         $scope.roofpikData.projectId = key;
         updates['roofpikData/' + key] = $scope.roofpikData;
         db.ref().update(updates, function(obj) {
            console.log(obj);
         });

      });
   };
   $scope.submitUrl = function(data, name) {
      sendUrl(data, name);
   }
   function sendUrl(url, name) {
      LoadingIndicatorService.loadingStart();
      console.log(url);
      console.log(angular.isString(url));
      console.log(angular.isObject(url));
      console.log($scope.url);
      $http({
         method: 'POST',
         url: 'http://192.168.1.22:5000/projectentry?url='+url
      }).then(function success(response) {
         console.log(response);
         if(name === "acres99") {
            $scope.acres99 = response.data;
            getUnitsLength();
            LoadingIndicatorService.loadingEnd();
         }
         else if(name === "magicBricks") {
            $scope.magicBricks = response.data;
            getUnitsLength();
            LoadingIndicatorService.loadingEnd();
         }
         else if(name === "squareYards") {
            $scope.xyz = response.data;
            getUnitsLength();
            LoadingIndicatorService.loadingEnd();
         }
         else {
            LoadingIndicatorService.loadingEnd();
         }
         // if(url.indexOf('99acres') != -1) {
         //    $scope.acres99 = response.data.temp;
         //    LoadingIndicatorService.loadingEnd();
         // }
         // else if(url.indexOf('squareyards') != -1) {
         //    $scope.xyz = response.data.temp;
         //    LoadingIndicatorService.loadingEnd();
         // }
         console.log(response);
      }, function error(response) {
         console.log(response);
         if(response.data === null) //Show Error Message
         LoadingIndicatorService.loadingEnd();
      });
   }
   $http.get('data/data.json').success(function(response) {
      $scope.json = response;
      $rootScope.isLoading = false;
   });
   // console.log(Object.getOwnPropertyNames($scope.acres99['units']).length);
   $scope.units = {};

   // Replace IDs In The Roofpik Data With Firebase Generated Keys
   function fixUnitIDs() {
      var defer = $q.defer();
      var configurations = {};
      angular.forEach($scope.roofpikData.units.configurations, function(value, key) {
         var pushKey = db.ref().child('roofpikData/units/configurations/').push().key;
         configurations[pushKey] = value;        
      });
      $scope.roofpikData.units.configurations = null;
      $scope.roofpikData.units.configurations = configurations;
      defer.resolve($scope.roofpikData);
      return defer.promise;
   }


   // Get The Maximum Length Of Units And Parse The Unit Template Corresponding To $scope.units
   function getUnitsLength() {
      if($scope.acres99) {
         if($scope.acres99.units) {
            if($scope.acres99.units.configurations) {
               $scope.length = Object.getOwnPropertyNames($scope.acres99.units.configurations).length;
               $scope.units = $scope.acres99.units.configurations;
               console.log($scope.units);
               console.log($scope.length);
            }
         }
      }
      if($scope.magicBricks) {
         if($scope.magicBricks.units) {
            if($scope.magicBricks.units.configurations) {
               $scope.length = $scope.length > Object.getOwnPropertyNames($scope.magicBricks.units.configurations).length ? $scope.length : Object.getOwnPropertyNames($scope.magicBricks.units.configurations).length;
               $scope.units = Object.getOwnPropertyNames($scope.units).length > Object.getOwnPropertyNames($scope.magicBricks.units.configurations).length ? $scope.units : $scope.magicBricks.units.configurations;
               console.log($scope.units);
               console.log($scope.length);
            }
         }
      }
      if($scope.xyz) {
         if($scope.xyz.units) {
            if($scope.xyz.units.configurations) {
               $scope.length = $scope.length > Object.getOwnPropertyNames($scope.xyz.units.configurations).length ? $scope.length : Object.getOwnPropertyNames($scope.xyz.units.configurations).length;
               $scope.units = Object.getOwnPropertyNames($scope.units).length > Object.getOwnPropertyNames($scope.xyz.units.configurations).length ? $scope.units : $scope.xyz.units.configurations;
               console.log($scope.units);
               console.log($scope.length);
            }
         }
      }
   }
});