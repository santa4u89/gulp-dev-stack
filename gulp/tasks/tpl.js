import gulp from 'gulp';
import { argv } from 'yargs';
import rename from 'gulp-rename';
import nunjucks from 'gulp-nunjucks';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';
import config from '../config';

const { src, dist } = config.paths;
const isProd = argv.prod || false;

gulp.task('tpl', () => {
    var data = {
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
