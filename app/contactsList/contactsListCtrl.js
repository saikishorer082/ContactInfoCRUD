
(function () {

    "use strict";
angular.module("contactInfo.list",[])
        .controller("contactsListController", ["$scope","contactFactory","$state","$window", function ($scope, contactFactory, $state, $window) {
            $scope.visible = true;
            $scope.assign = function (contact) {
                $scope.visible = false;
                $scope.contact = contact;
            }
            console.log("From contactsListController");
            $scope.contacts = {};
            $scope.contact = {};
            $scope.Close = function () {
                
                $state.go('contactsList');
            }
            
            $scope.contactsList = function () {
                contactFactory.getContacts()
                              .then(function (response) {
                                  $scope.contacts = response.data;
                              }).catch(function (response) {
                                  console.log(response);
                              });
            };
            
            $scope.deleteContact = function (id) {
                contactFactory.deleteContact(id)
                              .then(function (response) {
                                  $scope.contactsList();
                              }).catch(function (response) {
                                  console.log(response);
                              });
            }
            $scope.contactsList();
        }]);
})();