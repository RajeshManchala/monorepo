const { dependencies } = require('./package.json')

const withTM = require('next-transpile-modules')(
    Object.keys(dependencies || []).filter(dependency => dependency.startsWith('@cars24/'))
)

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
    withTM({
        async redirects() {
            return [
                {
                    source: '/buy-car',
                    destination: '/buy-used-car',
                    permanent: true
                }
            ]
        },
        async rewrites() {
            return [
                {
                    source: '/buy-used-:carMakeModel-cars-:city-:lid(\\d+)/checkout',
                    destination: '/buy-used-car',
                },
            ];
        },
        env: {
            NEXT_PUBLIC_BUILD_REVISION: process.env.BUILD_REVISION || 'DEVELOP'
        },
        basePath: ''
    })
);
