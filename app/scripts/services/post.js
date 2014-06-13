'use strict';

//service to store the post data thru firebase
app.factory('Post', ['', function($resource){
	return $resource('https://crackling-fire-3852.firebaseio.com/posts/:id.json');

}]);