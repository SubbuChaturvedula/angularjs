var app=angular.module('MyApp',[]);

app.controller('MainCtrl', function ($scope) {
    $scope.data = {
        label: "Hello Button",
        class: "btn-primary"
    }
});