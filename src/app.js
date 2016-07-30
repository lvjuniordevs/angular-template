var angular = require('angular');

var myApp = angular.module('myApp',[]);


myApp.controller('main',function($scope,$filter,$log){
	$scope.skills = ['All','Javascript','CSS'];
	$scope.active = 0;
	$scope.list = [
	{
		tags:['All','CSS'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','CSS'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','CSS'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/500x500'
	},
	{
		tags:['All','Javascript','CSS'],
		url:'http://placehold.it/500x500'
	}
	];

	$scope.second = $scope.list;
	$scope.image = '';

	$scope.toggleActive = function(index,skill) {
	
		$scope.active = index;

		$scope.filterList(skill)
	}

	$scope.filterList = function(skill) {
		$scope.second = [];
		$scope.list.forEach(function(item){
			return item.tags.forEach(function(tag){
				if(skill===tag){
					$scope.second.push(item)
					return true;
				}
			})
		})

		console.log($scope.second)
	};

	$scope.toggleContact = function() {
		var myEl = angular.element( document.querySelector( '#contact-modal' ) );
		myEl.toggleClass('hide-modal');
	}

	$scope.toggleImage = function(item) {
		var item = item || "";
		var myEl = angular.element( document.querySelector( '#image-modal' ) );
		myEl.toggleClass('hide-modal');


		$scope.image = item.url || "";
		
	}

		
	
})

