var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

// 生成配置文件的路径
var configPath = path.resolve(__dirname, '../src/config.json');

// 生成config文件
fs.writeFileSync(configPath, JSON.stringify({
	token: '',
	apiEnv: 'development'
}, null, 4));

console.log(chalk.cyan(configPath + ' had credted'));
