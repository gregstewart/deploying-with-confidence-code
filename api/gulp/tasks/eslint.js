import eslint from 'gulp-eslint';

export default function(gulp) {
  gulp.task('eslint', function() {
    return gulp
      .src([
        '**/*.js',
        '!node_modules/**/*.js',
        '!spec/lib/**/*.js'
      ])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });
}
