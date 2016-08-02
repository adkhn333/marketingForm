app
.service('ErrorMessage', function($mdDialog, $mdToast) {
   var Obj = {};
   Obj = {
      showImportantMessage: function(title, textContent) {
         return $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(false)
            .title(title)
            .textContent(textContent)
            .ariaLabel('Something went wrong.')
            .ok('OK!')
         );
      },
      showMessage: function(title, textContent) {
         return $mdToast.show(
            $mdToast.simple()
               .textContent(title+'\n'+textContent)
               .hideDelay(3000)
         );
      }
   };
   return Obj;
})
;