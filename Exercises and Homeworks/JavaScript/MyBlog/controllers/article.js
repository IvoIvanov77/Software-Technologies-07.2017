const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        let articleData = req.body;
        console.log(articleData);

        let articleObject = {
            title: articleData.title,
            content: articleData.content,
            author: req.user.id
        };

        Article.create(articleObject).then(article => {
            console.log(req.user);
            req.user.articles.push(article.id);
            console.log(req.user);
            req.user.save();
            res.redirect('/');
        });


    }

};