var app = angular.module('FotosLugaresApp', ['ngRoute', 'ngResourse', 'ui.bootstrap']);
app.config(function ($routeProvider) {
    $routeProvider.when("/explorar", {
        controller: "lugaresexplorarcontroller",
        templateUrl: "/app/views/resultadorlugares.html"
    });
    $routeProvider.otherwise({ redirectTo: "/explorar" });
});
