var myapp = angular.module('myapp');
myapp.service('AppService',['$http',function($http){
var students = [
    {
    name : 'Joshua',
    age  : '31'
    },
    {
        name : 'Anil',
        age  : '32'  
    }

];
this.getStudents = function(){
 return $http.get('/students.json');
    
}
}]);