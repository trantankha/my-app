module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default'
    }
    if (req.query.hasOwnProperty('_sort')) {
        //phương thức assign() ghi đè đối tượng 1 của đố tượng 2
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column
        })
    }
    next();
}