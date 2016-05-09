var gulp = require('gulp');
var sass = require("gulp-sass");
var watch = require('gulp-watch');

gulp.task('sass', function () {
  //if other tasks depend on this task, it must return something
  return gulp.src('./public/style/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/style'));
});

gulp.task('watch', function () {
  gulp.watch('./public/style/style.scss', ['sass']);
});



gulp.task('default', ['sass', 'watch'], function(){
  console.log('gulp is on...');
})
