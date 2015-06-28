import jasmine from 'gulp-jasmine';
import SpecReporter from 'jasmine-spec-reporter';
import util from 'gulp-util';

var paths = {
  scripts: ['./config/**/*', './helpers/**/*.js', './lib/**/*.js', './plugins/**/*.js', './routes/**/*.js', './services/**/*.js'],
  tests: ['./spec/**/*-spec.js']
};

export default function (gulp) {
  gulp.task('jasmine', () => {
    gulp.src(paths.tests)
      .pipe(jasmine({
        reporter: new SpecReporter()
      }))
      .on('error', util.log);
  });

  gulp.task('watch-jasmine', () => {
    gulp.watch(paths.tests, ['jasmine']);
    gulp.watch(paths.scripts, ['jasmine']);
  });
}
