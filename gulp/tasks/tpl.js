import gulp from 'gulp';
import { argv } from 'yargs';
import rename from 'gulp-rename';
import nunjucks from 'gulp-nunjucks';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';
import config from '../config';

const { src, dist } = config.paths;
const isDev = argv.dev || false;
const isProd = argv.prod || false;
/**

    TODO:
    - _prod not working in nunjucks templates

 */

gulp.task('tpl', () => {
    var data = {
        '_dev': isDev,
        '_prod': isProd
    };
    gulp.src(src.tpl.entry)
        .pipe(nunjucks.compile(data))
        .pipe(rename((path) => {
            path.extname = '.html';
        }))
        .pipe(gulp.dest(isProd ? dist.base : src.base))
        .pipe(browserSync.stream());
});
