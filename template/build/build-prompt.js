require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');
inquirer.prompt([{
    name: 'env',
    message: '请选择编译环境（choose build env）',
    type: 'list',
    default: 'dev',
    choices: ['dev', 'prepub', 'prod']
}]).then(function (answers) {
    if (process.platform === 'win32') {
        var cmd = `set BUILD_ENV=${answers.env}&& set NODE_ENV=production&& node build/build.js`;
    } else {
        var cmd = `BUILD_ENV="${answers.env}" NODE_ENV="production" node build/build.js`;
    }

    console.log();
    console.log('   $ ' + cmd);
    console.log();
    console.log('   building...');

    exec(cmd);
});
