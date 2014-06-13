'use strict';
     
app.controller('PostsCtrl', function ($scope) {
	//holds all of the submitted posts
	$scope.posts = [];
	//format for the information stored by each post
	$scope.post = {url: 'http://', title: ''};
	//method to put a newly submitted post into posts, and reset form
	$scope.submitPost = function(){
		$scope.posts.push($scope.post);
		$scope.post = {url: 'http://', title: ''};
	};

	//deletes the given post 'index' from the array
	$scope.deletePost = function (index){
		$scope.posts.splice(index, 1);
	};
 

});