// Untuk mengecek apakah user sudah login
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    /* GET home page. */
    app.get('/',function (req, res) {
    	res.render('homepage/homepage', {page: 'Home', menuId: 'home'});
    });
};