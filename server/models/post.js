var mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
    id: { type: String, default: "" },
    name: { type: String, required: [true, "Name is required"], minlength: [3, "Name has a required length of 3"]},
    comment: { type: String, required: [true, "A comment is required"], minlength: [1, "A comment has a required length of 3"]},
    likes: [
        {id: {type: String, required: true}}
    ]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

var PostSchema = new mongoose.Schema({
    id: { type: String, default: "" },
    name: { type: String, required: [true, "Name is required"], minlength: [3, "Name has a required length of 3"]},
    post: { type: String, required: [true, "Post is required"], minlength: [3, "Post has a required length of 3"]},
    comments: [CommentSchema],
    likes: [
        {id: {type: String, required: true}}
    ]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

var UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, "Name has a required length of 3"] },
    email: {type: String, required: [true, "Email is required"], minlength: [10, "A valid email is required"] },
    password: {type: String, required: [true, "Password is required"], minlength: [3, "Password has a required length of 3"] },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })



mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
mongoose.model('User', UserSchema);