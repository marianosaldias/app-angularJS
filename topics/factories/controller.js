angular.module("ToDoList", ["LocalStorageModule"])
    .factory('ToDoService', function(localStorageService) {
        var toDoService = {};

        toDoService.key = "angular-todolist";

        if(localStorageService.get(toDoService.key)) {
            toDoService.activities = localStorageService.get(toDoService.key);
        } else {
            toDoService.activities = [];
        }

        toDoService.add = function(newActv) {
            toDoService.activities.push(newActv);
            toDoService.updLocalStorage();            
        };
        toDoService.updLocalStorage = function() {
            localStorageService.set(toDoService.key, toDoService.activities)
        };
        toDoService.clean = function() {
            toDoService.activities = [];
            toDoService.updLocalStorage();
            return ToDoService.getAll();
        };
        toDoService.getAll = function() {
            return toDoService.activities;
        };
        toDoService.removeItem = function(item) {
            toDoService.activities = toDoService.activities.filter(function(activty) {
                return activty !== item
            });
            toDoService.updLocalStorage();
            return toDoService.getAll();
        };

        return toDoService;
        
    })
    .controller("ToDoController", function($scope, ToDoService) {

        $scope.todo = ToDoService.getAll();

        $scope.addActv = function() {
            ToDoService.add($scope.newActv);
            $scope.newActv = {};
        }
        $scope.removeActv = function(item) {
            $scope.todo = ToDoService.removeItem(item);
        }        
        $scope.clean = function(item) {
            ToDoService.clean();
        }        
        
    })