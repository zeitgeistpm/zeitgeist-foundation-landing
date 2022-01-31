const browserify = require('browserify');
const gulp = require('gulp');
const log = require('gulplog');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const postcss = require('gulp-postcss');

const generateJs = function() {
    return new Promise(resolve => {
        log.info('Generating JS');

        const devMode = this.config.devMode;

        var b = browserify({
            entries: './js/main.js',
            debug: devMode
        });

        let stream = b.bundle()
            .pipe(source('main.js'))
            .pipe(buffer());

        if (!devMode) {
            stream = stream.pipe(uglify());
        }

        return stream
            .pipe(gulp.dest(this.outputDirectory))
            .on('end', resolve);
    });
}

const generateTailwindCss = function() {
    return new Promise(resolve => {
        log.info('Generating TailwindCss');

        // const devMode = this.config.devMode;

        let stream = gulp.src('./scss/tailwind.css')
          .pipe(postcss([
              require('tailwindcss')(require('./tailwind.config')),
              require('autoprefixer'),
          ]))

        // if (!devMode) {
        //     stream = stream.pipe(uglify());
        // }

        stream
          .pipe(gulp.dest(this.outputDirectory))
          .on('end', resolve)
    });
}

const reloadBrowser = function () {
    return new Promise(resolve => {
        this.browserSync.reload();
        resolve()
    })
}

const watchJS = function() {
    log.info('Watching JS');
    gulp.watch(
        './js/**/*.js',
        gulp.series(generateJs.bind(this), reloadBrowser.bind(this))
    )
}

module.exports = function (emitter) {
    emitter.on('BEFORE:GeneratePages', generateTailwindCss.bind(this));
    emitter.on('AFTER:GenerateCss', generateJs.bind(this));
    emitter.on('AFTER:OnServe', watchJS.bind(this));
}
