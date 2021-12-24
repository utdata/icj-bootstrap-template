const gulp = require('gulp');

module.exports = () => {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js.map'
  ])
    .pipe(gulp.dest('./docs/js'))
};