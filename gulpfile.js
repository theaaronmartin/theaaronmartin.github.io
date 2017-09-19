// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('assets/stylesheets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/stylesheets/css/'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('assets/stylesheets/sass/*.scss', ['sass']);
})