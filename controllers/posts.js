const Post = require('../models/post');

module.exports = (app) => {
    console.log("export");
  // CREATE
  app.post('/posts/new', (req, res) => {
    console.log("create post");
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);
    console.log("instance post");
    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      console.log("redirect");
      return res.redirect(`/`);
    })
  });

};