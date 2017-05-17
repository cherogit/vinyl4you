'use strict'

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');
const del = require('del');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const short = require('postcss-short');
const assets = require('postcss-assets');
const Import = require('postcss-import');
const cssnext = require('cssnext');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');

// Clean =================================
gulp.task('clean', function() { 
	return del('build/*');
});

// Pages =================================
gulp.task('pug', function() {
	return gulp.src('./src/pug/*.pug')
		.pipe(pug({pretty: true}))  //с переносом pretty: true
		.pipe(gulp.dest('build'))
});

// Css =====================================

gulp.task('styles:vendor', function() {
    return gulp.src('./src/styles/vendorCss/*.css')
        .pipe(gulp.dest('./build/css/vendorCss/'))
});

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
    		loadPaths: ['src/assets/fonts/**/*', 'src/assets/images/**/*'],
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
		.pipe(gulp.dest('build/js/'))
});

// Fonts =================================
gulp.task('fonts', function() {
	return gulp.src('./src/assets/fonts/**/*')
	    .pipe(gulp.dest('build/assets/fonts/'))
});

// Images =================================
gulp.task('img', function() {
	return gulp.src('./src/assets/images/**/*')
		// .pipe(imagemin())
		.pipe(gulp.dest('build/assets/images/'))
});

// Watch =================================
gulp.task('watch', function() {
	gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/styles/**/*.css', gulp.series('styles'));
	gulp.watch('src/styles/vendorCss/*.css', gulp.series('styles:vendor'));
	gulp.watch('src/scripts/**/*.js', gulp.series('js'));
	gulp.watch('src/assets/fonts/**/*', gulp.series('fonts'));
	gulp.watch('src/assets/images/**/*', gulp.series('img'));
});

// Build =================================
gulp.task('build', gulp.series(
    'clean', 
    gulp.parallel('pug', 'styles', 'styles:vendor', 'js', 'fonts', 'img'))
);

// Server =================================
gulp.task('serve', function() {
    browserSync.init({
        injectChanges: true,
        server: './build'
    });

    browserSync.watch('build').on('change', browserSync.reload);
})

gulp.task('dev', 
	gulp.series('build', gulp.parallel('watch', 'serve'))
);

// Default ----------------------------------------
gulp.task('default',
    gulp.series(gulp.parallel('watch', 'serve'))
);










