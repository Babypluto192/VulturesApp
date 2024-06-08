const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: "true",
        skipWaiting: "true",

    }, }

)

module.exports = {
    images: {
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '4000',
            pathname: '**',
        },
    ],
},
}