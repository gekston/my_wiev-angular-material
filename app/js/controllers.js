var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Igor',
     'password': '1111'},
    {'name': 'Luda',
     'password': '2222'},
    {'name': 'MOTOROLA XOOM™',
     'password': 'The Next, Next Generation tablet.'}
  ];
  $scope.loginValidate = "name";
});
