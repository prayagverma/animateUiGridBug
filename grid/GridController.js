(function () {
    'use strict';

    angular.module('app')
        .controller('GridController', GridController);

    GridController.$inject = [];

    function GridController() {
        var gridCtrl = this;

        gridCtrl.gridOptions = {
            data: [
                {
                    "firstName": "Cox",
                    "lastName": "Carney",
                    "company": "Enormo",
                    "employed": true
                },
                {
                    "firstName": "Lorraine",
                    "lastName": "Wise",
                    "company": "Comveyer",
                    "employed": false
                },
                {
                    "firstName": "Nancy",
                    "lastName": "Waters",
                    "company": "Fuelton",
                    "employed": false
                }
            ]
        }
    }
})();
