app.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('/home',{
         url: '/home',
         templateUrl: 'form/form.html',
         controller: 'formCtrl'
      })
      ;
   $urlRouterProvider.otherwise('/home');
});