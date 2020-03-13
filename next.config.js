const prod = process.env.NODE_ENV === 'production';

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          fallback: 'file-loader',
          publicPath: '/_next/static/images',
          outputPath: 'static/images/',
          name: '[name]-[hash].[ext]',
        },
      },
    });
    config.resolve.modules.push(__dirname);

    return config;
  },
};
