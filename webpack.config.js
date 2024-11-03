const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    /* publicPath : "./", */ /* A enleve pour passer sur la partie dev */
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[hash].[ext]", // option pour le nom de fichier de sortie
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg)$/i,  // Ajout de cette règle pour les vidéos
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'videos/', // Chemin où les fichiers vidéos seront placés
            },
          },
        ],
      },
    ],
  },
}
