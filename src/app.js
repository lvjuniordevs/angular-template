$("document").ready(function() {
  $('#fullpage').fullpage({
    slidesNavigation: true,
    responsiveWidth: 768
  });

  console.log($("#fullpage"))
});


// var angular = require('angular');

// var myApp = angular.module('myApp',[]);


// myApp.controller('main',function($scope,$filter,$log){
// 	$scope.skills = ['All','Javascript','CSS','React'];
// 	$scope.active = 0;
// 	$scope.list = [
// 	{	title:'title',
// 		tags:['CSS'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['CSS'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['CSS'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['Javascript'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['Javascript'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['Javascript'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['Javascript'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	},
// 	{	title:'title',
// 		tags:['Javascript','CSS'],
// 		description:'description',
// 		url:'http://placehold.it/500x500',
// 		site:"www.site.surge.sh",
// 		github:'www.github-link.com'
// 	}
// 	];

// 	$scope.second = $scope.list;
// 	$scope.image = '';
// 	$scope.hideFields = false;

// 	$scope.toggleActive = function(index,skill) {
	
// 		$scope.active = index;

// 		var hr = document.getElementsByClassName('glow-line')[0];

// 		hr.style.marginLeft = (index * 10 + "%");

// 		$scope.filterList(skill);

		
// 	}

// 	$scope.filterList = function(skill) {
// 		$scope.second = [];

// 		if(skill==='All') {
// 			$scope.second = $scope.list;

// 		}
// 		else {
// 			$scope.list.forEach(function(item){
// 				return item.tags.forEach(function(tag){
// 					if(skill===tag){
// 						$scope.second.push(item)
// 						return true;
// 					}
// 				})
// 			});
// 		}
		
// 	};

// 	$scope.toggleContact = function() {
// 		var myEl = angular.element( document.querySelector( '#contact-modal' ) );
// 		var over = angular.element( document.querySelector( '#overlay' ) );
// 		myEl.toggleClass('show-modal');
// 		over.toggleClass('overlay');
// 	}

// 	$scope.toggleImage = function(item) {
// 		var item = item || "";
// 		var myEl = angular.element( document.querySelector( '#image-modal' ) );
// 		var over = angular.element( document.querySelector( '#overlay' ) );
// 		myEl.toggleClass('show-modal');
// 		over.toggleClass('overlay');


// 		$scope.image = item.url || "";
// 		$scope.title = item.title;
// 		$scope.description = item.description;
// 		$scope.tags = item.tags;
// 		$scope.site = item.site;
// 		$scope.github = item.github;

		
// 	}

// 	$scope.success = function() {
// 		var form = angular.element( document.querySelector( '#form-body' ) );
// 		var over = angular.element( document.querySelector( '#overlay' ) );
// 		var check = document.getElementsByClassName('check')[0];
// 		var myEl = angular.element( document.querySelector( '#contact-modal' ) );

// 		form.toggleClass('disabled');
		
// 		check.style.strokeDashoffset = 0;

// 		setTimeout(function(){
// 			myEl.toggleClass('show-modal');
// 			over.toggleClass('overlay');
// 			form.toggleClass('disabled');

// 			check.style.strokeDashoffset = "";
// 		},700)
// 	}
	
// })

