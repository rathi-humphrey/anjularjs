var myapp = angular.module('myapp');
myapp.component('studentDetails', {
    template :'<div ng-show="$ctrl.currentStudent"><h2>{{$ctrl.myTitle}}</h2> <p>Name: {{$ctrl.currentStudent.name}}</p>   <p>Age: {{$ctrl.currentStudent.age}}</p>    </div>',
    bindings: {
        myTitle:'@',
        currentStudent:'<'
    },
    controller : [function(){
        this.myname = "Custom";
    }]
});

myapp.component('homePage',{
    template: '<div>Home page</div>'
});

myapp.component('testPage',{
    template: '<div>Test page</div>'
});