app.controller('BookStore', function ($scope) {
    $scope.items =
        [
            { ISBN: "5674789", Nombre: "ASP.NET MVC", Precio: 560, Cantidad: 20 },
            { ISBN: "4352134", Nombre: "AngularJS", Precio: 450, Cantidad: 25 },
            { ISBN: "2460932", Nombre: "JavaScript", Precio: 180, Cantidad: 15 },

        ];
    $scope.editing = false;
    $scope.totalPrice = function () {
        var total = 0;
        for (i = 0; i < $scope.items.length; i++) {
            total += $scope.items[i].Precio * $scope.items[i].Cantidad;
        }
        return total;
    };
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    }
    $scope.editItem = function(index) {
        $scope.editing = $scope.items.indexOf(index);
    }
    $scope.saveField = function(index) {
        if ($scope.editing !== false) {
            $scope.editing = false;
        }
    };
});
