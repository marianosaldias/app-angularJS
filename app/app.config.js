mainApp.config(function($routeProvider){
        $routeProvider
            .when("/index", {
                controller: "Index",
                templateUrl: "templates/index.html"
            })
            .when("/users", {
                controller: "Users",
                templateUrl: "templates/users.html"
            })
            .when("/aboutUs", {
                controller: "AboutUs",
                templateUrl: "templates/aboutUs.html"
            })
            .when("/register", {
                controller: "Register",
                templateUrl: "templates/register.html"
            })
            .when('/notFound', {
                controller: "NotFound",
                templateUrl: "templates/notFound.html"
            })
            .otherwise({
                redirectTo: '/notFound'
            });       
    });