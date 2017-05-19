var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');
var pump = require('pump');
var jshint = require('gulp-jshint');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8887
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/**/**/*.html'], ['html']);
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/**/**/*.js'], ['html']);
    gulp.watch(['./app/*.js'], ['html']);
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('./app/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

var map = require('map-stream');
var myReporter = map(function (file, cb) {
    if (file.jshint.success) {
        return cb(null, file);
    }

    console.log('JSHINT fail in', file.path);
    file.jshint.results.forEach(function (result) {
        if (!result.error) {
            return;
        }

        const err = result.error;
        //console.log(`  line ${err.line}, col ${err.character}, code ${err.code}, ${err.reason}`);
        console.log('line ' + err.line + ', col' + err.character + ',  code ' + err.code + '   ' + err.reason);
    });

    cb(null, file);
});

//gulp.task('jshint', function () {
//    return gulp.src(['./app/*.js', './app/src/**/*.js', './app/src/**/**/*.js'])
//        .pipe(jshint())
//        .pipe(myReporter);
//});

gulp.task('default', ['connect', 'watch']);