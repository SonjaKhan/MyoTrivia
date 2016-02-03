var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require("vinyl-source-stream");

gulp.task('default', ['bundleClient']);

gulp.task('bundleClient', ['move'], function() {
    var b = browserify();
    
    // USING THE REACT TRANSFORM
    b.transform(reactify);
    
    // Grab the file to build the dependency graph from
    b.add('./bin/client/main.js');
    
    b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./bin/client/static/js'));
});


gulp.task('move', ['move-js', 'move-component', 'move-statics']);

gulp.task('move-js', function() {
    var jsfiles = gulp.src('src/**/*.js');

    return jsfiles.pipe(gulp.dest('./bin'));
});


gulp.task('move-component', function(cb) {
    var jsx = gulp.src('src/client/component/*.jsx')
        .pipe(gulp.dest('./bin/client/component'));

    jsx.on('end', function() {
        cb();
    });
});

gulp.task('move-statics', function() {
    var vendors = gulp
        .src('src/client/static/**/*');

    return vendors.pipe(gulp.dest('./bin/client/static'));
});