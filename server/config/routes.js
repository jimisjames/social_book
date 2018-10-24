var posts = require('../controllers/posts.js')

module.exports = function (app) {

    app.get('/all', function (req, res) {
        posts.all(req, res)
    })

    app.post('/', function (req, res) {
        posts.new(req, res)
    })

    app.post('/comment', function (req, res) {
        posts.newComment(req, res)
    })

    app.post('/user', function (req, res) {
        posts.newUser(req, res)
    })

    app.post('/login', function (req, res) {
        posts.login(req, res)
    })

    app.post('/likePost', function (req, res) {
        posts.likePost(req, res)
    })

    app.delete('/:id', function (req, res) {
        posts.deletePost(req, res, req.params.id)
    })
    app.delete('/comment/:id', function (req, res) {
        posts.deleteComment(req, res, req.params.id)
    })

    /* app.get('/one/:id', function (req, res) {
        pets.get(req, res, req.params.id)
    }) */

    /* app.patch('/', function (req, res) {
        pets.like(req, res)
    }) */

    
    /* app.put('/', function (req, res) {
        pets.update(req, res)
    }) */


}