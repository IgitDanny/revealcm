'use strict';

angular.module('revealcmApp')
    .controller('AdminslideCtrl', function($scope, $firebase) {


    	//This also happens to be the default menu options.
    	$scope.wysiwygMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
            ['font'],
            ['font-size'],
            ['font-color', 'hilite-color'],
            ['remove-format'],
            ['ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify'],
            ['code', 'quote', 'paragragh'],
            ['link', 'image']
        ];



        var ref = new Firebase("https://revealjscm.firebaseio.com/");
        var sync = $firebase(ref);
        
        $scope.slider = sync.$asArray();

        console.log(' $scope.slider ' , $scope.slider )  ;

        $scope.addSlider = function(){
        	var slider = { title : $scope.title ,  
        					content : $scope.content } ; 

        	console.log('addSlider' , slider ) ; 
        	$scope.slider.$add( slider );
        	cleanSlideForm();
        }

        $scope.deleteSlide = function(slide){
            $scope.slider.$remove(slide)
        }

        $scope.updateSlide = function(slide){

            slide.title = $scope.title ; 
            slide.content = $scope.content ; 
            console.log(' slide ' ,  slide ) ; 

        	$scope.slider.$save(slide);
        }


        var cleanSlideForm = function(){
        	$scope.title = '' ; 
			$scope.content = '' ;
        }

        $scope.getSlide = function(slide){
        	$scope.content = slide.content ; 
        	$scope.title = slide.title ; 
        	console.log(' getSlide ' ,  $scope.content);
        }


    });