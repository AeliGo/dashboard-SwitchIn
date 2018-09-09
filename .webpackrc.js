
export default {
    theme: {
        "@primary-color": "#00b7d6",
        "@link-color": "#00b7d6",
        "@border-radius-base": "4px",
        "@font-size-base": "16px",
        "@line-height-base": "1.2"
    },
    // proxy: {
    //     '/api': {
    //         target: 'http://jsonplaceholder.typicode.com/',
    //         changeOrigin: true,
    //         pathRewrite: { '^/api': '' }
    //     }
    // },
    extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
    env: {
        development: {
            extraBabelPlugins: ['dva-hmr']
        }
    }
}