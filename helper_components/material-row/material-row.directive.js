app
.directive('fbMdRow', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         scope.propertyName = attribute.property;
         scope.propertyNameInHuman = camelCaseToHuman(attribute.property);
         console.log(scope.propertyName);
         console.log(scope.propertyNameInHuman);
      },
      templateUrl: 'helper_components/material-row/material-row.html'
   }
})
.directive('fbMdRowTwoLevel', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         // console.log(attribute.property);
         var obj = JSON.parse(attribute.property);
         // console.log(angular.isArray(JSON.parse(attribute.property)));
         scope.propertyName0 = obj[0];
         scope.propertyName1 = obj[1];
         scope.propertyNameInHuman = camelCaseToHuman(obj[1]);
         // console.log(scope.propertyName0);
         // console.log(scope.propertyName1);
         // console.log(scope.propertyNameInHuman);
      },
      templateUrl: 'helper_components/material-row/material-row-two-level.html'
   }
})
.directive('fbMdRowThreeLevel', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         // console.log(attribute.property);
         var obj = JSON.parse(attribute.property);
         // console.log(angular.isArray(JSON.parse(attribute.property)));
         scope.propertyName0 = obj[0];
         scope.propertyName1 = obj[1];
         scope.propertyName2 = obj[2];
         scope.propertyNameInHuman = camelCaseToHuman(obj[2]);
         // console.log(scope.propertyName0);
         // console.log(scope.propertyName1);
         // console.log(scope.propertyName2);
         // console.log(scope.propertyNameInHuman);
      },
      templateUrl: 'helper_components/material-row/material-row-three-level.html'
   }
})
.directive('fbMdRowFourLevel', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         // console.log(attribute.property);
         var obj = JSON.parse(attribute.property);
         // console.log(angular.isArray(JSON.parse(attribute.property)));
         scope.propertyName0 = obj[0];
         scope.propertyName1 = obj[1];
         scope.propertyName2 = obj[2];
         scope.propertyName3 = obj[3];
         scope.propertyNameInHuman = camelCaseToHuman(obj[3]);
         // console.log(scope.propertyName0);
         // console.log(scope.propertyName1);
         // console.log(scope.propertyName2);
         // console.log(scope.propertyNameInHuman);
      },
      templateUrl: 'helper_components/material-row/material-row-four-level.html'
   }
})
.directive('fbMdRowFiveLevel', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         // console.log(attribute.property);
         var obj = JSON.parse(attribute.property);
         // console.log(angular.isArray(JSON.parse(attribute.property)));
         scope.propertyName0 = obj[0];
         scope.propertyName1 = obj[1];
         scope.propertyName2 = obj[2];
         scope.propertyName3 = obj[3];
         scope.propertyName4 = obj[4];
         scope.propertyNameInHuman = camelCaseToHuman(obj[4]);
         // console.log(scope.propertyName0);
         // console.log(scope.propertyName1);
         // console.log(scope.propertyName2);
         // console.log(scope.propertyNameInHuman);
      },
      templateUrl: 'helper_components/material-row/material-row-five-level.html'
   }
})
.directive('fbMdRowSixLevel', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         // console.log(attribute.property);
         var obj = JSON.parse(attribute.property);
         // console.log(angular.isArray(JSON.parse(attribute.property)));
         scope.propertyName0 = obj[0];
         scope.propertyName1 = obj[1];
         scope.propertyName2 = obj[2];
         scope.propertyName3 = obj[3];
         scope.propertyName4 = obj[4];
         scope.propertyName5 = obj[5];
         scope.propertyNameInHuman = camelCaseToHuman(obj[5]);
         // console.log(scope.propertyName0);
         // console.log(scope.propertyName1);
         // console.log(scope.propertyName2);
         // console.log(scope.propertyNameInHuman);
      },
      templateUrl: 'helper_components/material-row/material-row-six-level.html'
   }
})
.directive('fbMdRowHeading', function($filter) {
   return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attribute) {
         var camelCaseToHuman = $filter('camelCaseToHuman');
         scope.title = camelCaseToHuman(attribute.title);
         // console.log(attribute.position);
      },
      templateUrl: 'helper_components/material-row/material-row-heading.html'
   }
});