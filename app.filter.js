var myapp = angular.module('myapp');
myapp.filter('customName', [function(){
    return function(value){
           return value;
    };
}]);