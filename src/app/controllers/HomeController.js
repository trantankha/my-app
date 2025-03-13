class HomeController {
    //[get]/home
    async index(req, res) {
        res.render('home');
    }
    async show(req, res) {
        res.send("Detail Home");
    }
}
module.exports = new HomeController();