mainApp
    .controller("Users", function($scope, UserService) {

        angular.extend($scope, {
          $onInit: getUsr(),
          users: [],
          getUsr: getUsr,
          deleteUsr: deleteUsr,
          editUsr: editUsr,
          onSubmit: onSubmit,
          showForm: false,
          submitted: false,
          toggleForm: toggleForm,
          resetForm: resetForm,
          user: {},
          usersHttpStatusCode: 0,
          usersHttpStatusText: "",
          selectedUsr: {},
          formvalid: userForm.$valid
        });

        /*
        function getUsr() {
          UserService.getAll()
            .success(function(data) {
              $scope.users = data;
            });
        }
        */

        function getUsr() {
          UserService.getAll()
            .then(res => {
              $scope.users = res.data;
              $scope.usersHttpStatusCode = res.status;
              $scope.usersHttpStatusText = res.statusText;              
            });
        }

        function editUsr(usr) {
          $scope.showForm = true;
          $scope.selectedUsr = usr;
          $scope.user._id = $scope.selectedUsr._id;
          $scope.user.firstName = $scope.selectedUsr.firstName;
          $scope.user.lastName = $scope.selectedUsr.lastName;
          $scope.user.nick = $scope.selectedUsr.nick;
          $scope.user.profile = $scope.selectedUsr.profile;
          $scope.user.status = $scope.selectedUsr.status;
          $scope.user.phone = $scope.selectedUsr.phone;
          $scope.user.email = $scope.selectedUsr.email;
          $scope.user.password = $scope.selectedUsr.password;
          $scope.user.confirmPassword = $scope.selectedUsr.password;

          $scope.submitted = true;
        }

        function onSubmit() {
          $scope.submitted = true;

          if ($scope.userForm.$valid == true) {
            if($scope.user._id) {
              UserService.putUser($scope.user)
                .then(res => {
                  getUsr();
                  resetForm();
                  $scope.submitted = false;
                  $scope.usersHttpStatusCode = res.status;
                  $scope.usersHttpStatusText = res.statusText;
                });
            } else {
              UserService.postUser($scope.user)
              .then(res => {
                getUsr();
                resetForm();
                $scope.submitted = false;
                $scope.usersHttpStatusCode = res.status;
                $scope.usersHttpStatusText = res.statusText;
              });
            }
          }
        }        

        function deleteUsr(id) {
          alert("Access denied");
          /*
            UserService.deleteUser(id)
              .success(function(data) {
                getUsr();
              });
          */    
        }

        function toggleForm() {
          $scope.showForm = !($scope.showForm);
        }         
        
        function resetForm() {
          document.querySelector("#userForm").reset();
          $scope.submitted = false;
          $scope.user = {};
          $scope.selectedUsr = {};
        }          

    });

