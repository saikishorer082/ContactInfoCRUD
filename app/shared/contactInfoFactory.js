(function () {

    "use strict";

    angular.module("contactInfo.shared", [])
        .factory("contactFactory", ["$http", function ($http) {
            var urlBase = 'api/ContactsInfo';
        var contactFactory = {};

        contactFactory.getContacts = function () {
            return $http.get(urlBase);
        };

        contactFactory.getContact = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        contactFactory.insertContact = function (cont) {
            return $http.post(urlBase, cont);
        };

        contactFactory.updateContact = function (cont) {
            return $http.put(urlBase + '/' + cont.ID, cont)
        };

        contactFactory.deleteContact = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

       

        return contactFactory;
    }]);
    })();