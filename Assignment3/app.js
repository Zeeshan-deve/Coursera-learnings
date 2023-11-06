(function () {
    angular.module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.found = []; // Initialize the found items array

        narrowCtrl.search = function () {
            MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
                .then(function (foundItems) {
                    narrowCtrl.found = foundItems;
                });
        };

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.found.splice(index, 1);
        };
    }
})();
