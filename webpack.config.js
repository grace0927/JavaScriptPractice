const path = require('path');

const config = {
    entry: '../react/showcase/showCase.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { tes: /\.txt$/, use: 'raw-loader' }
        ]
    }
}
