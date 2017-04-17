angular.module("contactInfo.delete",[])
        .controller("contactDeleteController", ["$scope", "contactFactory", "$stateParams", "$state", function ($scope, contactFactory, $stateParams, $state) {
            console.log("From contactDeleteController");
            $scope.showModal = true;
            $scope.Close = function () {
                $state.go('contactsList');
            }
            $scope.contact = $stateParams.contact;
            $scope.deleteContact = function (id) {
                contactFactory.deleteContact(id)
                              .then(function (response) {
                                  $scope.Close();
                               }).catch(function (response) {
                                 console.log(response);
                               });
            };
        }]);