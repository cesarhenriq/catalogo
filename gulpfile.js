var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

//Image task
//Compress
gulp.task('image', function(){
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});
