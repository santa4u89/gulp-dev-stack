import gulp from 'gulp';
import { argv } from 'yargs';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import config from '../config';

const { src, dist, names } = config.paths;
const isProd = argv.prod || false;

gulp.task('styles', () => {
    let postCssBefore = [
        autoprefixer({ browsers: ['last 2 versions'] })
    ];
    let postCssAfter = [
        cssnano()
    ];

    gulp.src(src.sass.entry)
        .pipe(plumber())
        .pipe(gulpif(!isProd, sourcemaps.init()))
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss(postCssBefore))
            .pipe(rename(names.css.src))
        .pipe(gulpif(!isProd, sourcemaps.write('.')))
        .pipe(gulpif(!isProd, gulp.dest(src.sass.dest)))
        .pipe(browserSync.stream())
        .pipe(gulpif(isProd, postcss(postCssAfter)))
        .pipe(gulpif(isProd, rename(names.css.min)))
        .pipe(gulpif(isProd, gulp.dest(dist.css)));
});
