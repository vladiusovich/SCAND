module.exports = {
    entry: './app/app.js',
    output: {
        path: '/WebProjects/SCAND/dist/js',
        filename: 'app.bandle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
