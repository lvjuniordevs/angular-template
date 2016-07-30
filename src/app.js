var angular = require('angular');

var myApp = angular.module('myApp',[]);


myApp.controller('main',function($scope,$filter,$log){
	$scope.skills = ['All','Javascript','CSS'];
	$scope.active = 0;
	$scope.list = [
	{	title:'title',
		tags:['CSS'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['CSS'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['CSS'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['Javascript'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['Javascript'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['Javascript'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['Javascript'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	},
	{	title:'title',
		tags:['Javascript','CSS'],
		description:'description',
		url:'http://placehold.it/500x500',
		site:"www.site.surge.sh",
		github:'www.github-link.com'
	}
	];

	$scope.second = $scope.list;
	$scope.image = '';

	$scope.toggleActive = function(index,skill) {
	
		$scope.active = index;

		var hr = document.getElementsByClassName('glow-line')[0];

		hr.style.marginLeft = (index * 10 + "%");

		$scope.filterList(skill)
	}

	$scope.filterList = function(skill) {
		$scope.second = [];

		if(skill==='All') {
			$scope.second = $scope.list;

		}
		else {
			$scope.list.forEach(function(item){
				return item.tags.forEach(function(tag){
					if(skill===tag){
						$scope.second.push(item)
						return true;
					}
				})
			});
		}
		
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
		$scope.title = item.title;
		$scope.description = item.description;
		$scope.tags = item.tags;
		$scope.site = item.site;
		$scope.github = item.github;

		
	}

		
	
})

