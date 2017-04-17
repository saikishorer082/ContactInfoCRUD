(function () {

    "use strict";
    angular.module("contactInfo.list")
            .filter("status", function () {
                return function (val) {
                    if (val == 0)
                        return "Active";
                    else 
                        return "In Active";
                }

            })
})();