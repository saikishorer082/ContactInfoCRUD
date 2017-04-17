angular.module("contactInfo", [
    "contactInfo.shared",
    "contactInfo.list",
    "contactInfo.edit",
    "ui.router",
    "ngMessages"
]);
console.log("Hi from app.js");
angular.module("contactInfo")
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("contactsList", {
            url: "/contactsList",
            templateUrl: "app/contactsList/contactsList.html",
           controller: "contactsListController"
        })
        .state("editContact", {
            url: "/editContact",
            templateUrl: "app/Edit/Edit.html",
            controller: "contactEditController",
            params: { contact: JSON }
        });

    $urlRouterProvider.otherwise("/contactsList");
    $locationProvider.html5Mode(true);
}]);