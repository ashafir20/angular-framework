"use strict";

angular.module("app").config(function($provide) {
    $provide.decorator("$exceptionHandler", [
        "$delegate", function($delegate) {
            return function(excepetion, cause) {
                $delegate(excepetion, cause);
                //alert(excepetion.message);
            }
        }
    ]);
});