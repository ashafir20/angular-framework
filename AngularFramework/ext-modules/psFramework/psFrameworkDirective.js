﻿"use strict";

angular.module("psFramework").directive("psFramework", function() {
    return {
        transclude: true,
        scope: {
            
        },
        controller: "psFramworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});