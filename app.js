var myapp = angular.module('myapp',[]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){
    AppService.getStudents().then(function(result){
        $scope.students=result.data;
    });
$scope.students = AppService.getStudents();
$scope.onViewBtnClick = function(student){
    $scope.selectedStudent = student;
}
}]);


