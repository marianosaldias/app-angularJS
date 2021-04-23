// Factory: ejecuta una funcion
// Service: construye un objeto (en este caso de tipo ToDoService)

angular.module("ToDoList", ["LocalStorageModule"])
    .service('ToDoService', function(localStorageService) {

        this.key = "angular-todolist";

        if(localStorageService.get(this.key)) {
            this.activities = localStorageService.get(this.key);
        } else {
            this.activities = [];
        }

        this.add = function(newActv) {
            this.activities.push(newActv);
            this.updLocalStorage();            
        };
        this.updLocalStorage = function() {
            localStorageService.set(this.key, this.activities)
        };
        this.clean = function() {
            this.activities = [];
            this.updLocalStorage();
            return this.getAll();
        };
        this.getAll = function() {
            return this.activities;
        };
        this.removeItem = function(item) {
            this.activities = this.activities.filter(function(activty) {
                return activty !== item
            });
            this.updLocalStorage();
            return this.getAll();
        };
    })
    .controller("ToDoController", function($scope, ToDoService) {

        $scope.todo = ToDoService.getAll();
        $scope.newActv = {};

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