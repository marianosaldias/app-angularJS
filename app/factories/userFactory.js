mainApp
    .factory('UserService', function($http) {

        var userService = {
            dataURL : "http://localhost:3000/api/users/",

            getAll : function() {
                return $http.get(this.dataURL);
            },
            editUser: function(usr) {
                return $http.put(this.dataURL + usr._id, usr);
            }, 
            deleteUser: function(id) {
                return $http.delete(this.dataURL + id);
            },
            postUser: function(user) {
                return $http.post(this.dataURL, user);
            },  
            putUser: function(user) {
                //return $http.put(this.dataURL + `/${user._id}`, user);
                return $http.put(this.dataURL + user._id, user);
            }                  
        };

        return userService;
        
    })    


