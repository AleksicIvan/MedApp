var MyApp = angular.module('MyApp', []);

MyApp.controller('MainCtrl', ['$scope', function($scope){

    $scope.disciplines = [
        {'oblast': 'Kardiologija'},
        {'oblast': 'Urologija'},
        {'oblast': 'Gastroenterologija'},
        {'oblast': 'Endokrinologija'},
        {'oblast': 'Interna'},
        {'oblast': 'Onkologija'}        
    ];
}]);
