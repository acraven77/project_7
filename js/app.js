'use strict'

const express = require('express');
const T = require('./config.js');
const app = express();
// let myTwitterAccount;
let myTwitterFriends;
let unfollow;




T.get('friends/list', { screen_name: 'onewaytechs', count: 5 }, function (err, data, response) {
    myTwitterFriends = data;
    // console.log(data.users);
})

T.post('friendships/destroy', {})



app.use('/static', express.static('./public'));

app.set('view engine', 'jade');

app.get('/', function(req, res){
    T.get('statuses/user_timeline', { screen_name: 'onewaytechs' }, function (err, data, response) {
        res.render('index', { myAccount: data, myFriends: myTwitterFriends.users });
    })

})

app.listen('3000', function() {
    console.log('This amesome server is listening on port 3000');
});







// T.get('search/tweets', { q: 'javascript since:2017-07-11', count: 100 }, function(err, data, response) {
//   console.log(data)
// })

// T.get('followers/ids', { screen_name: 'onewaytechs' },  function (err, data, response) {
//   console.log(data)
// })



// T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
//   console.log(data)
// })

// T.post('statuses/update', { status: 'Working on my 7th project at Treehouse' }, function(err, data, response) {
//   console.log(data)
// })

// T.post('statuses/destroy/:id', { id: '865574738784960512' }, function (err, data, response) {
//   console.log(data)
// })