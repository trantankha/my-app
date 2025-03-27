const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/QLBH', {});
        console.log('Connect success!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };