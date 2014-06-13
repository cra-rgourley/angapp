'use strict';

app.controller('PostsCtrl', function ($scope, Post) {

	//holds all of the submitted posts
	$scope.posts = Post.all;

	//format for the information stored by each post
	$scope.post = {url: 'http://', title: ''};

	//method to put a newly submitted post into posts, and reset form
	$scope.submitPost = function(){
		Post.create($scope.post).then(function(){
			$scope.post = {url: 'http:// ', 'title':''};
		});
	};

	//deletes the given post 'index' from the array
	$scope.deletePost = function (postId){
		Post.delete(postId);
	};
 
});