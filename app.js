// app.js
(function () {
    angular.module('ShoppingListCheckOff', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = [];

    function ShoppingListController() {
        var controller = this;

        controller.toBuyList = [
            { name: 'cookies', quantity: 10 },
            { name: 'apples', quantity: 5 },
            { name: 'bananas', quantity: 8 },
            { name: 'milk', quantity: 2 },
            { name: 'bread', quantity: 1 }
        ];

        controller.alreadyBoughtList = [];

        controller.buyItem = function (index) {
            var item = controller.toBuyList.splice(index, 1)[0];
            controller.alreadyBoughtList.push(item);
        };
    }
})();
