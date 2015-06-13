import fs from 'fs';
import gulp from 'gulp';
import util from 'gulp-util';
import path from 'path';

gulp.task('build', ['eslint', 'jasmine']);

// load all tasks in tasks directory ...
let dir = path.resolve(__dirname, 'tasks');
for (let file of fs.readdirSync(dir)) {
  let task = require(path.resolve(dir, file));
  if(task.default) {
    task = task.default;
  }
  if(typeof task !== 'function') {
    util.log(`task ${file} must export a default function`);
  }
  task(gulp);
}
