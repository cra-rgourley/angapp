'use strict';


     
app.controller('PostsCtrl', function ($scope, Post) {

	//holds all of the submitted posts
	$scope.posts = [];

	//format for the information stored by each post
	$scope.post = {url: 'http://', title: ''};

	//method to put a newly submitted post into posts, and reset form
	$scope.submitPost = function(){
		$scope.posts.push($scope.post);
		Post.save($scope.post, function (ref) {
   	  $scope.posts[ref.name] = $scope.post;
   	   $scope.post = {url: 'http://', title: ''};
    });
		$scope.post = {url: 'http://', title: ''};
	};

	//deletes the given post 'index' from the array
	$scope.deletePost = function (postId){
		Post.delete({id: postId}, function(){
			delete $scope.posts[postId];
		});
	};
 
});