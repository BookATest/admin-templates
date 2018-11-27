var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var bourbon         = require('bourbon').includePaths;
var neat            = require('bourbon-neat').includePaths;
var autoprefixer    = require('gulp-autoprefixer');
var babel           = require('gulp-babel');
var concat          = require('gulp-concat');

gulp.task('serve', ['sass', 'js', 'fonts', 'html'], function() {
    browserSync.init({
        server: './dist'
        //proxy: 'localhost:8080'
    });
    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
    gulp.watch('src/assets/js/**/*.js', ['js']);
    gulp.watch('src/assets/fonts/**/*', ['fonts']);
    gulp.watch('src/**/*.html', ['html']).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('src/assets/scss/**/*.scss')
        .pipe(sass({
            includePaths: [bourbon, neat],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
  return gulp.src('src/assets/fonts/**/*')
      .pipe(gulp.dest('dist/assets/fonts'))
      .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
