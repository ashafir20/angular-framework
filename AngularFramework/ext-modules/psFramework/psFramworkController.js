"use strict";

angular.module("psFramework").controller("psFramworkController",
    ["$scope",
    function ($scope) {

        $scope.$on('ps-menu-item-selected-event', function(evt, data) {
            $scope.routeString = data.route;
        });
    }]
);