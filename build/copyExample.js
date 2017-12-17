/**
 * @author licat
 * @date 17/12/17
 */
var chalk = require('chalk')
var rm = require('rimraf')
var path = require('path')
var child_process = require('child_process');
var distDir = '../docs/example';
rm(distDir, err => {
  console.log(chalk.yellow(distDir + ' is clear now'));
  child_process.spawn('cp', ['-r', '../dist/example', distDir])
    .on('close',function(){
      console.log(chalk.green('copy example successfully!'))
    })
})
