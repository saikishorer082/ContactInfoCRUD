angular.module("contactInfo.edit",[])
        .controller("contactEditController", ["$scope", "contactFactory","$stateParams", "$state", function ($scope, contactFactory, $stateParams, $state) {
            console.log("From contactEditController");
            $scope.contact = {};
            $scope.contact = $stateParams.contact;
            $scope.activate = true;
            if($scope.contact.ID == undefined){
                $scope.title = "Add New Contact";
                $scope.contact = {};
            }
            else {
                $scope.title = "Edit Contact Details";
                $scope.activate = false;
            }
            
            $scope.Close = function () {
                $state.go('contactsList');
            };
            $scope.insertContact = function (contact) {
                contactFactory.insertContact(contact)
                              .then(function (response) {
                                  console.log(response);
                                  $scope.Close();
                              }).catch(function (response) {
                                  $scope.error = "An error occured while adding Contact details!" +response;
                              });
            };
            $scope.updateContact = function (contact) {
                contactFactory.updateContact(contact)
                              .then(function (response) {
                                  console.log(response);
                                  $scope.Close();
                              }).catch(function (response) {
                                  $scope.error = "An error occured while updating Contact details!" + response;
                              });
            };
        }]);