// app.js
(function () {
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.searchTerm = '';
        narrowCtrl.found = [];

        narrowCtrl.search = function () {
            MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
                .then(function (foundItems) {
                    narrowCtrl.found = foundItems;
                });
