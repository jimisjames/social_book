
var mongoose = require('mongoose'),
Post = mongoose.model('Post')
Comment = mongoose.model('Comment')
User = mongoose.model('User')

const bcrypt = require('bcryptjs');


module.exports = {

    all: function(req, res) {
        Post.find({}).sort({created_at: -1}).exec(function(err, data){
            if(err){
                console.log("error")
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    new: function(req, res) {
        console.log(req.body)
        var post = new Post(req.body);
        post.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully added');
                res.json({message: "Success"});
            }
        })
    },

    newComment: function(req, res) {
        //console.log(req.body)

        Comment.create({name: req.body.name, comment: req.body.comment}, function (err, data) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                Post.findByIdAndUpdate({_id: req.body.post_id}, {$push:{comments: data}}, function(err, data){
                    if (err) {
                        console.log('something went wrong');
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message: "Success", data: data});
                    }
                })
            }
        })
    },

    newUser: function(req, res){
        console.log(req.body)
        User.find({email: req.body.email}, function(err, data){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                if(data.length != 0){
                    res.json({message: "Error", error: {errors: {email: {message: "This email is already registered!"}}}});
                } else {
                    bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        var user = new User({name: req.body.name, email: req.body.email, password: hashed_password })
                        user.save(function(err){
                            if (err) {
                                res.json({message: "Error", error: err});
                            } else {
                                res.json({message: "Success"});
                            }
                        })
                    })
                    .catch(error => {
                        res.json({message: "Error", error: error});
                    });
                }
            }
        })
    },

    login: function(req, res){
        User.findOne({email: req.body.email}, function(err, data){
            if(err){
                res.json({message: "Error", error: err});
            } else if(data == null) {
                res.json({message: "Error", error: {errors: {email: {message: "Email address not found! Register below!"}}}});
            } else {
                //console.log(data)
                bcrypt.compare(req.body.password, data.password)
                .then( result => {
                    console.log(result)
                    if(result){
                        res.json({message: "Success", data: data});
                    } else {
                        res.json({message: "Error", error: {errors: {email: {message: "Failed to log in."}}}});
                    }
                })
                .catch( error => {
                    if(error){
                        res.json({message: "Error", error: error});
                    }
                })
            }
        })
    },

    likePost: function(req, res) {
        //console.log(req.body)
        Post.find({_id: req.body.postId, likes: {$elemMatch: {id: req.body.userId}}}, (err, data) => {
            if(err){
                res.json({message: "Error", error: err});
            } else {
                //console.log("data", data)
                if(data.length > 0){
                    Post.updateOne({ _id: req.body.postId }, { $pull: {likes: {id: req.body.userId} }}, function (err, data) {
                        if (err) {
                            //console.log(err)
                            res.json({message: "Error", error: err});
                        } else {
                            res.json({message: "Success", data: data});
                        }
                    })
                } else {
                    Post.updateOne({ _id: req.body.postId }, { $push: {likes: {id: req.body.userId} }}, function (err, data) {
                        if (err) {
                            //console.log(err)
                            res.json({message: "Error", error: err});
                        } else {
                            res.json({message: "Success", data: data});
                        }
                    })
                }
            }
        })
    },

    deletePost: function(req, res, id) {
        Post.deleteOne({ _id: id }, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully removed');
                res.json({message: "Success"});
            }
        })
    },

    deleteComment: function(req, res, id) {
        console.log(id)
        Post.updateOne({ comments: {$elemMatch: { _id: id }}}, { $pull: {comments: {_id: id} }}, function (err, data) {
            if (err) {
                //console.log(err)
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    /* get: function(req, res, id) {
        Pet.findOne({ _id: id }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        })
    }, */



    /* update: function(req, res) {
        Pet.findOne({ name: req.body.name }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({message: "Error", error: err});
            } else {
                if(data == null || data["_id"] == req.body._id){
                    Pet.update({ _id: req.body._id }, { $set: {name: req.body.name, type: req.body.type, description: req.body.description, skill_one: req.body.skill_one, skill_two: req.body.skill_two, skill_three: req.body.skill_three, }}, function (err) {
                        if (err) {
                            console.log('something went wrong');
                            res.json({message: "Error", error: err});
                        } else {
                            //console.log('successfully updated pet');
                            res.json({message: "Success"});
                        }
                    })
                } else {
                    res.json({message: "Repeat name! This name already exists in the database, please make a unique name!"});
                }
            }
        })
    }, */

}