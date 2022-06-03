const { defaultTheme } = require('vuepress')
const { mdEnhancePlugin } = require('vuepress-plugin-md-enhance');
const config_sidebar = require('./config/config_sidebar.js');
const config_nav = require('./config/config_nav.js');

module.exports = {
    title: 'Yusheng Huang\'s page',
    //description: 'Just playing around',
    host: 'localhost',
    port: '8090',
    base:'/online_notes/',
    
    theme: defaultTheme({
        navbar: config_nav,
        sidebar: config_sidebar,
    }),
    
    themeConfig: {
        displayAllHeaders: false, // 默认值：false
        logo: '../homepage_resource/homepage.png',
    },
    
    plugins: [
        mdEnhancePlugin({
        // 启用 TeX 支持
        tex: true,
        }),
    ],
};
