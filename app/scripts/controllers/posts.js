'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {

	//holds all of the submitted posts
	if ($location.path() === '/') {
		//aka only show all the posts if we are on the homepage
		$scope.posts = Post.all;
	}
	

	//format for the information stored by each post
	$scope.post = {url: 'http://', title: ''};

	/* NO LONGER IN THIS SCOPE, MOVED TO NAV BAR
	//method to put a newly submitted post into posts, and reset form
	$scope.submitPost = function(){
		Post.create($scope.post).then(function(ref){
			$location.path('/posts/'+ref.name());
		});
	};*/

	//deletes the given post 'index' from the array
	$scope.deletePost = function (postId){
		Post.delete(postId);
	};
 
});