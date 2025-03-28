const path = require('path');
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const routeInit = require('./routes/index')
const db = require('./config/database/index')
const sortMiddleware = require('./app/middlewares/sortMiddleware')

db.connect()
app.use(express.static(path.join(__dirname, 'public')))
//thư viện morgan để hỗ trợ debug
app.use(morgan('combined'))
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))
app.use(sortMiddleware)
//Template engines
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (columnName, field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default'
            const icons = {
                default: 'fa fa-exchange',
                asc: '	fa fa-arrow-up',
                desc: '	fa fa-arrow-down'
            }
            const types = {
                default: 'asc',
                asc: 'desc',
                desc: 'asc'
            }
            const icon = icons[sortType];
            const type = types[sortType]
            return `<a href="?_sort&column=${field}&type=${type}" class="nav-link">
                ${columnName} <i class="${icon}"></i>
            </a>`
        }
    }
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resourse/views'))
//Cấu hình điều hướng
routeInit(app)
//Kết nối server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})