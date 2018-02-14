var myapp = angular.module('myapp',['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
$stateProvider.state({
    name: 'home',
    url: '/home',
    component : 'homePage'
   // template: '<div>Home page</div>'
});
$stateProvider.state({
    name: 'test',
    url: '/test',
    component : 'testPage'
    //template: '<div>Test page</div>'
});
$urlRouterProvider.otherwise('/home');
}]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){
    AppService.getStudents().then(function(result){
        $scope.students=result;
        });
$scope.students = AppService.getStudents();
$scope.onViewBtnClick = function(student){
    $scope.selectedStudent = student;
}
}]);


