'use strict'

var gulp = require('gulp');

var browserSync = require('browser-sync');
var livereload = require('gulp-livereload');
var del	= require('del');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var short = require('postcss-short');
var assets = require('postcss-assets');
var Import = require('postcss-import');
var cssnext = require('cssnext');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var cssnano = require('cssnano');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');

// Clean =================================
gulp.task('clean', function() { 
	return del.sync('build/*');
});

// Server =================================
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'build'
		},
		notify: false
	});
});

// Css =====================================
gulp.task('styles', function () {
    var processors = [
    	Import,
        autoprefixer({browsers: ['last 3 version']}),
    	cssnext({
    		'customProperties': true,
    		'customFunction': true,
    		'customSelectors': true,
    	}),
    	//cssnano(),
    	nested,
    	short,
    	assets({
    		loadPaths: ['src/fonts/', 'src/images/icons', 'src/images/img', 'src/images/pict'],
    		relativeTo: 'src/styles/'
    	}),
    ];
    return gulp.src('./src/styles/style.css')
        .pipe(postcss(processors))
        .pipe(rename('styles.css')) // как называется новый файл
        .pipe(gulp.dest('./build/css/')) // куда его положить
});

// Scripts =================================
gulp.task('js', function() {
    return gulp.src('./src/scripts/**/*')
    	// .pipe(concat('min.js'))
		.pipe(gulp.dest('./build/js/'));
});

// Fonts =================================
gulp.task('fonts', function() {
	return gulp.src('./src/fonts/**/*')
	    .pipe(gulp.dest('./build/fonts/'));
});

// Images =================================
gulp.task('img', function() {
	return gulp.src('./src/images/**/*')
		// .pipe(imagemin())
		.pipe(gulp.dest('./build/img/'));
});

// Watch =================================
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('src/styles/**/*.css', ['styles'], browserSync.reload);
	// gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/scripts/**/*.js', browserSync.reload);
});

// Build =================================
gulp.task('build', ['clean', 'styles', 'js', 'fonts', 'img'], function() {
	return gulp.src('src/styles/*.min.css')
		.pipe(gulp.dest('build/styles'));
});

gulp.task('dev', ['build', 'browser-sync', 'watch']);
gulp.task('default', ['build']);










