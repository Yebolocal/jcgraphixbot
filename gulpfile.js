var gulp = require('gulp');
var env = require('gulp-env');
var nodemon = require('gulp-nodemon');
var dirName = __dirname;

gulp.task('nodemon', function () {
    env({
        file: './configD.json',
        vars: {
            // any variables you want to overwrite
        }
    });
    return nodemon({
        script: 'server.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('default', [
    'nodemon'
]);
