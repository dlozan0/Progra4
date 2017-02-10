app.controller('bookStore', function ($scope) {
    $scope.items =
        [
            { ISBN: "5674789", Nombre: "ASP.NET MVC", precio: 560, cantidad: 20 },
            { ISBN: "4352134", Nombre: "AngularJS", precio: 450, cantidad: 25 },
            { ISBN: "2460932", Nombre: "JavaScript", precio: 180, cantidad: 15 },

        ];
});
