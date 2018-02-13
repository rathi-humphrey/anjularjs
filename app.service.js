var myapp = angular.module('myapp');
myapp.service('AppService',['$http','$q',function($http,$q){
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
 var defer = $q.defer();
 $http.get('/students.json').then(function(result){
     var students=result.data.map(function(item){
        item.senior = item.age <10 ?"junior":"senior";
        return item;
     });
        defer.resolve(students);
 });
 return defer.promise;
    
}
}]);