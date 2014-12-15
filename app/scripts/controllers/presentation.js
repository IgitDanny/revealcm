'use strict';

angular.module('revealcmApp')
    .controller('PresentationCtrl', function($scope, $firebase , $timeout) {


        var ref = new Firebase("https://revealjscm.firebaseio.com/");
        var sync = $firebase(ref);

        $scope.slider = sync.$asArray();

        $timeout( function(){
			Reveal.initialize({});
        } , 2000);
        // Reveal.initialize({});


    });