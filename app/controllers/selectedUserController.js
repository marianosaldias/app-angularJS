mainApp
    .component("selectedUser", {
        templateUrl: "./templates/selectedUser.html",
        controller: selectedUsr,
        controllerAs: 'su',
        bindings: {
            usr: '=',
            selected: '=', 
            usershttpcode: '<',
            usershttptext: '<',
            submitted: '<',
            formvalid: '<'
        }
    });


    function selectedUsr() {

		var su = this;

        angular.extend(su, {          
            disabledUsr: disabledUsr
        });        

        function disabledUsr() {
            su.usr.status = "Disabled";
            console.log('Disabled');
        }

    }
    