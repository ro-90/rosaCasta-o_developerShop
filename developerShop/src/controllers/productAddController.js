const productAddController = {
    index: function (req, res, next) {
        return res.render('productAdd', { title: 'cambios' });
    }


}


module.exports = productAddController;