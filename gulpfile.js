var gulp = require('gulp'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    googlecdn = require('gulp-google-cdn'),
    wiredep = require('wiredep').stream,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    processhtml = require('gulp-processhtml'),
    webserver = require('gulp-webserver');    

var bases = {
    src: 'src/',
    app: 'app/'
    };

var paths = {
    scripts: ['src/scripts/*.js'],
    styles: ['src/styles/*.css'],
    html: ['index.html', '404.html'],
    images: ['src/images/*.png']
};

// Delete the app directory
gulp.task('clean', function() {
    return gulp.src(bases.app)
        .pipe(clean());
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest(bases.app));    
});

gulp.task('bower', function () {
    return gulp.src('src/index.html')
        .pipe(googlecdn(require('./bower.json')))
        .pipe(gulp.dest('app'));
});

gulp.task('styles', function(){
    return gulp.src('./src/styles/*.css')
        .pipe(gulp.dest(bases.app + 'styles/'));
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(bases.app + 'scripts/'));
});

gulp.task('webserver', function (){
    return gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch('src/index.html', ['html']);
});
    





