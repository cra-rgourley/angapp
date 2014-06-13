'use strict';
 
app.factory('Post', function ($resource) {
return $resource('https://crackling-fire-3852.firebaseio.com/posts//:id.json');
});