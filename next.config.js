/* eslint-disable no-param-reassign */
const withImages = require('next-images');

module.exports = withImages({
    webpack: (config) => {
        const originalEntry = config.entry;
        config.entry = async () => {
            try {
                const entries = await originalEntry();
                console.log('Build entries ', entries);
                if (entries['main.js']) {
                    entries['main.js'].unshift('babel-polyfill'); // <- polyfill here
                }
                return entries;
            } catch (error) {
                console.log('Error', error);
            }
            return {};
        };
        return config;
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
});
