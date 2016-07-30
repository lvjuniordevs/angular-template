var angular = require('angular');

var myApp = angular.module('myApp',[]);


myApp.controller('main',function($scope,$filter){
	$scope.skills = ['All','Javascript','CSS'];
	$scope.active = 0;
	$scope.list = [
	{
		tags:['All','CSS'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','CSS'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','CSS'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','Javascript'],
		url:'http://placehold.it/250x250'
	},
	{
		tags:['All','Javascript','CSS'],
		url:'http://placehold.it/250x250'
	}
	];

	$scope.second = $scope.list;

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

		
	
})

