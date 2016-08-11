var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('style/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('style/css'))
});

gulp.task('sass-watch', function(){
  gulp.watch('style/sass/**/*.scss', ['sass']); 
  // Other watchers
});





