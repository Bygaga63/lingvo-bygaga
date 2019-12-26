const withOffline = require('next-offline');

const nextConfig = {
    // generateInDevMode: true,
    workboxOpts: {
        swDest: 'static/service-worker.js',
        generateInDevMode: true,
    },
    experimental: {
        async rewrites() {
            return [
                {
                    source: '/service-worker.js',
                    destination: '/_next/static/service-worker.js',
                },
            ]
        },
    },
    webpack(config) {
        config.resolve.modules.push(`${__dirname}/src`);
        return config;
    },
};

module.exports = withOffline(nextConfig);
