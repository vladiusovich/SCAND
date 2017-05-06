var path = require('path');
module.exports = {
    entry: {
      arcBorder: path.join(__dirname, 'app', 'ArcBorder.js'),
      particle: path.join(__dirname, 'app', 'Particle.js'),
      vector: path.join(__dirname, 'app', 'Vector.js'),
      app: path.join(__dirname, 'app', 'app.js')
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].bandle.js'
    },
    module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'app')
        }]
    }
}
