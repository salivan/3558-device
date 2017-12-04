var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

function logE(e) {
  console.log(e.message);
  this.emit('end');
}

gulp.task('default', function () {
  return gulp.src('css/**/*.css')
    .pipe(concatCss("style.css"))
    .on('error', logE)
    .pipe(gulp.dest('bundle/'))
});

if (!process.env.PRODUCTION) gulp.watch('css/**/*.css', ['default']);
