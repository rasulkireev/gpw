module.exports = {
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
            exclude: /node_modules/,
            use: [
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                    ],
                },
            },
          ],
        }
      ],
    }
  }