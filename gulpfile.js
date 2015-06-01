var autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
	plumber = require('gulp-plumber')
	reload = browserSync.reload,
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify');


/** gulp-changed, gulp-clean needed*/

gulp.task('dev-watch-task', function(){
	browserSync({
		server:{
			baseDir:"./build/"
		}
	});

	gulp.watch('./*.html', ['html-dev']);
	gulp.watch('css/*.less', ['less-dev']);
	gulp.watch('js/*.js', ['scripts-dev']);
});

gulp.task('html-dev', function(){
	return gulp.src('./*.html')
		.pipe(plumber())
		.pipe(gulp.dest('build')) //check if folder paths maintained
		.pipe(reload({stream: true})); 
});

gulp.task('html-prod', function(){
	return gulp.src('./*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('less-dev', function() {
    return gulp.src('css/*.less')
    	.pipe(plumber())
        .pipe(less())
		.pipe(autoprefixer({
			cascade: true
		}))
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream: true}));
});

gulp.task('less-prod', function(){
	return gulp.src('css/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			cascade: true
		}))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('scripts-dev', function() {
	return gulp.src('js/*.js')
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('build/js'))
	.pipe(reload({stream: true}));
});

gulp.task('scripts-prod', function(){
	return gulp.src(['js/libs/*.js', 'js/*.js'])
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js')); 
});


gulp.task('default',['dev-watch-task']);
gulp.task('production', ['html-prod', 'less-prod', 'scripts-prod'])