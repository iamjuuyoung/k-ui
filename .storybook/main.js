/**
 * 파일 경로 불러옴 
 */
 const path = require('path');

 module.exports = {
   stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
   webpackFinal: async (config, { configType }) => {
     config.resolve.alias = {
       ...config.resolve.alias,
       '@': path.resolve(__dirname, '../packages'),
     };
 
     return config;
   },
 };
 