var path = require('path');

module.exports = {
    entry: 'modules/app/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
