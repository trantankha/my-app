class HomeController {
    //[get]/home
    async index(req, res) {
        res.render('home');
        // return res.json({ message: 'Hello World' });
    }
    async show(req, res) {
        res.send('Detail Home');
    }
}
module.exports = new HomeController();