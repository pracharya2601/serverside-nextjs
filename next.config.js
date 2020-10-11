module.exports = {
    //for development environment just to delay to see the changes
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300;
        return config;
    },
    devIndicators: {
        autoPrerender: false,
      },
}

