// controller.js
(function () {
    angular.module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['$http'];

    function NarrowItDownController($http) {
        var narrowCtrl = this;
        narrowCtrl.searchTerm = "";
        narrowCtrl.foundItems = [];
        narrowCtrl.showResults = false;
        narrowCtrl.nothingFound = false;

        narrowCtrl.narrowItDown = function () {
            if (narrowCtrl.searchTerm.trim() === "") {
                narrowCtrl.foundItems = [];
                narrowCtrl.showResults = false;
                narrowCtrl.nothingFound = true;
                return;
            }

            narrowCtrl.nothingFound = false;

            $http({
                method: 'GET',
                url: 'https://your-api-url-here/menu_items' // Replace with your API endpoint
            }).then(function (response) {
                narrowCtrl.foundItems = response.data.menu_items.filter(function (item) {
                    return item.description.toLowerCase().includes(narrowCtrl.searchTerm.toLowerCase());
                });

                narrowCtrl.showResults = true;
            });
        };

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.foundItems.splice(index, 1);
        };
    }
})();
