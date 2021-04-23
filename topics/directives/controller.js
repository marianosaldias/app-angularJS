angular.module("CustomDirective", [])
    /*
    .directive("myAutocomplete", function() {
        function link(scope, element, attrs) {
            $(element).autocomplete({
                source: scope[attrs.myAutocomplete],
                select: function(ev, ui) {
                    ev.preventDefault();
                    if(ui.item) {
                        scope.optionSelected(ui.item.value);
                    }
                },
                focus: function(ev, ui) {
                    ev.preventDefault();
                    $(this).val(ui.item.label);
                }                    
            });
            return {
                link: link
            };
        }
    })
    */

    .directive("backImg", function() {
        return function(scope, element, attrs) {
            attrs.$observe('backImg', function(value) {
                element.css({
                    "background-image": "url('"+value+"')",
                    "background-size": "cover",
                    "background-position": "center" 
                })
            })
        }
    })

    .controller("AppCtrl", function($scope, $http) {
        $scope.repos = [];

        $http.get("https://api.github.com/users/codigofacilito/repos")
            .success(function(data) {
                $scope.posts = data;
                for (var i=data.length-1; i>=0; i--) {
                    var repo = data[i];
                    $scope.repos.push(repo.name);
                }
            })
            .error(function(error) {
                console.log(error);
            }); 

        $scope.optionSelected = function(data) {
            $scope.$apply(function() {
                $scope.main_repo = data;
            })
        }
        
    })

