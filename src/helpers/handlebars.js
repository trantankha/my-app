const Handlebars = require('handlebars');

module.exports = {
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
        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)

        const result = `<a href="${href}" class="nav-link">
            ${columnName} <i class="${icon}"></i>
        </a>`
        return new Handlebars.SafeString(result);
    }
}